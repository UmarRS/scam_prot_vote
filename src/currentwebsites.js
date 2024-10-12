import React, { useState } from "react";
import { ChevronDown, ChevronUp, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for websites
const initialWebsites = [
  { id: 1, name: "Vercel", url: "https://vercel.com", votes: 0 },
  { id: 2, name: "Next.js", url: "https://nextjs.org", votes: 0 },
  { id: 3, name: "Tailwind CSS", url: "https://tailwindcss.com", votes: 0 },
  { id: 4, name: "shadcn/ui", url: "https://ui.shadcn.com", votes: 0 },
];

function CurrentWebsites() {
  const [websites, setWebsites] = useState(initialWebsites);
  const [expandedUrls, setExpandedUrls] = useState({});

  const toggleUrlExpansion = (id) => {
    setExpandedUrls((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const upvoteWebsite = (id) => {
    setWebsites((prev) =>
      prev.map((website) =>
        website.id === id ? { ...website, votes: website.votes + 1 } : website
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Current Websites</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {websites.map((website) => (
          <Card key={website.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>{website.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-normal"
                  onClick={() => toggleUrlExpansion(website.id)}
                >
                  {expandedUrls[website.id] ? (
                    <ChevronUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 mr-1" />
                  )}
                  {expandedUrls[website.id] ? "Hide URL" : "Show URL"}
                </Button>
                {expandedUrls[website.id] && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {website.url}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => upvoteWebsite(website.id)}
                  className="flex items-center"
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Upvote
                </Button>
                <span className="text-sm font-medium">
                  {website.votes} votes
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CurrentWebsites;
