import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";

export function YourAvatars() {
  const avatars = [
    {
      id: "A1",
      role: "Sales Assistant",
      created: "1 day ago",
      description: "Handles product inquiries and demos",
    },
    {
      id: "A2",
      role: "Sales Assistant",
      created: "2 days ago",
      description: "Processes orders and provides support",
    },
    {
      id: "A3",
      role: "Sales Assistant",
      created: "3 days ago",
      description: "Answers FAQs about services",
    },
  ];

  return (
    <div className="bg-card space-y-6 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Avatars</h1>
        <Button
          variant="outline"
          className="bg-primary  max-w-xs rounded-2xl border-none text-white"
        >
          Create New Avatar
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {avatars.map((avatar) => (
          <Card
            key={avatar.id}
            className="bg-background w-full rounded-2xl border-none text-white"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="bg-primary h-12 w-12">
                <AvatarFallback className="bg-primary">
                  {avatar.id}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold">{avatar.id}</h2>
                <p className="text-muted-foreground text-sm">{avatar.role}</p>
                <p className="text-muted-foreground text-xs">
                  Created {avatar.created}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{avatar.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                className="rounded-2xl text-white"
                variant="outline"
                size="sm"
              >
                Edit
              </Button>
              <Button className="bg-primary rounded-2xl text-white" size="sm">
                View Stats
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
