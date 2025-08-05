import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY as string);

interface CommitSummaryOptions {
  maxDiffLength?: number;
  maxBulletPoints?: number;
  modelName?: string;
}

export const summarizeGitCommit = async (
  diff: string,
  options: CommitSummaryOptions = {},
): Promise<string> => {
  const {
    maxDiffLength = 2500,
    maxBulletPoints = 3,
    modelName = "gemini-1.5-flash",
  } = options;

  const SYSTEM_PROMPT = `
You are a senior engineer analyzing git diffs. Follow these rules strictly:

1. OUTPUT FORMAT:
- Bullet points only (no headings)
- Each change must be actionable
- Reference 1-2 key files max per point
- Never reference examples or rules

2. CONTENT RULES:
- Highlight value changes (numbers, strings, flags)
- Group similar changes
- Ignore formatting/whitespace changes
- Never use phrases like "changes were made"

3. EXAMPLES OF GOOD OUTPUT:
• Increased timeout from 30s → 60s [src/config.ts]
• Fixed SSL certificate validation [auth/service.ts]
• Added pagination to user API (3 files)
• Removed deprecated initDatabase() call
`.trim();

  const userPrompt = `Summarize these code changes in ${maxBulletPoints} bullet points or less:\n\n${
    diff.length > maxDiffLength
      ? `${diff.substring(0, maxDiffLength)}\n[...truncated at ${maxDiffLength} chars]`
      : diff
  }`;

  if (!diff.trim()) return "[Empty diff - no changes detected]";

  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        {
          role: "model",
          parts: [{ text: "Understood. Please provide the git diff." }],
        },
        { role: "user", parts: [{ text: userPrompt }] },
      ],
    });

    const response = await result.response;
    const text = response.text();

    return text.replace(/^\s*EXAMPLE.*$/gm, "").trim();
  } catch (error) {
    console.error(
      `Commit summary failed: ${error instanceof Error ? error.message : String(error)}`,
    );
    return "[AI summary unavailable]";
  }
};
