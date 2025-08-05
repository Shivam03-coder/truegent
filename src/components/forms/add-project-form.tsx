"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  projectSchema,
  type AddProjectType,
} from "@/schema/add-project.schema";
import { useAppToasts } from "@/hooks/use-app-toasts";
import { api } from "@/trpc/react";

interface AddProjectDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddProjectDialog({
  open,
  setOpen,
}: AddProjectDialogProps) {
  const form = useForm<AddProjectType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      repoUrl: "",
      projectName: "",
      githubToken: "",
    },
  });

  const { SuccessToast, ErrorToast } = useAppToasts();
  const createProject = api.project.createProejct.useMutation();

  const onSubmit = (values: AddProjectType) => {
    try {
      createProject.mutateAsync(values, {
        onSuccess() {
          SuccessToast({
            title: "Project added successfully!",
            description: `${values.projectName} has been created and saved.`,
          });
          setOpen(false);
          form.reset();
        },
        onError(error: any) {
          ErrorToast({
            title: "Failed to add project",
            description:
              error?.message || "An unexpected error occurred. Please try again.",
          });
        },
      });
    } catch (error: any) {
      console.error("Form submission error", error);
      ErrorToast({
        title: "Submission Error",
        description: error?.message || "Something went wrong during submission.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); form.reset(); }}>
      <DialogContent className="bg-foreground sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-1">
            Link Your GitHub <Github /> Repository
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repo URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/username/repo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Cool Project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubToken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Token <span className="text-muted-foreground">(optional)</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxx"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
              <Button type="submit" size="sm">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
