import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  const email = data.email_addresses?.[0]?.email_address ?? null;
  const firstName = data.first_name;
  const lastName = data.last_name;
  const profile = data.image_url;
  const id = data.id;
  const name = `${firstName} ${lastName}`;

  try {
    await db.user.create({
      data: {
        id,
        email,
        profile,
        name,
      },
    });
  } catch (error) {
    console.log(" error:", error);
    return new Response("Webhook failed", { status: 200 });
  }
  return new Response("Webhook received", { status: 200 });
};
