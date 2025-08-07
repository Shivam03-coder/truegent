import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Progress } from "@workspace/ui/components/progress";

export function CallsHandledPerAgent() {
  const agents = [
    {
      name: "Avatar 1",
      calls: 48,
      successRate: 38,
      avatarFallback: "A1",
    },
    {
      name: "Avatar 2",
      calls: 52,
      successRate: 27,
      avatarFallback: "A2",
    },
    {
      name: "Avatar 3",
      calls: 37,
      successRate: 32,
      avatarFallback: "A3",
    },
    {
      name: "Avatar 4",
      calls: 49,
      successRate: 27,
      avatarFallback: "A4",
    },
  ];

  return (
    <Card className="w-full bg-card border-none rounded-2xl text-white">
      <CardHeader>
        <CardTitle>Calls Handled (Per Agent)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {agents.map((agent) => (
          <div key={agent.name} className="flex bg-background p-4 rounded-2xl items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{agent.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between text-sm font-medium">
                <span>{agent.name}</span>
                <span>{agent.calls} calls</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <Progress value={agent.successRate} className="h-2" />
                <span className="text-xs text-muted-foreground">
                  {agent.successRate}%
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                success rate
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}