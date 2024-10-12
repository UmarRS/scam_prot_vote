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
import axios from "axios";

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

  // Function to extract company name from the URL
  const extractCompanyName = (url) => {
    const regex = /https?:\/\/(?:www\.)?([^\.]+)\./;
    const match = url.match(regex);
    return match ? match[1] : "Unknown";
  };

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    // Extract the company name from the URL
    const companyName = extractCompanyName(values.url);

    // Prepare the data to send to the backend
    const payload = {
      siteurl: values.url,
      company: companyName,
      description: values.description,
    };

    try {
      // Send the POST request to the backend using axios
      const response = await axios.post(
        "http://localhost:5001/api/voting/createwebsite",
        payload
      );

      if (response.status === 201) {
        toast({
          title: "Website added",
          description: "The website has been successfully added.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "There was an error adding the website.",
        });
      }
    } catch (error) {
      console.error("Error adding website:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
      });
    }

    setIsSubmitting(false);
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
