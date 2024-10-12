import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
  description: z
    .string()
    .max(500, { message: "Description must not exceed 500 characters" })
    .optional(),
});

function AddWebsitePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      description: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = (values) => {
    setIsSubmitting(true);
    console.log(values);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Website added",
        description: "The website has been successfully added.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold mb-6">Add Website</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the full URL of the website you want to add.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a brief description of the website"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can provide a short description of the website (max 500
                  characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Website"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AddWebsitePage;
