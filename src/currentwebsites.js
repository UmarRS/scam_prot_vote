import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CurrentWebsites() {
  const [websites, setWebsites] = useState([]);
  const [expandedUrls, setExpandedUrls] = useState({});

  useEffect(() => {
    // Fetch all websites from the backend
    const fetchWebsites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/voting/getvotes"
        );
        setWebsites(response.data);
      } catch (error) {
        console.error("Error fetching websites:", error);
      }
    };

    fetchWebsites();
  }, []);

  const toggleUrlExpansion = (id) => {
    setExpandedUrls((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const upvoteWebsite = async (id) => {
    try {
      // Send a POST request to the backend to upvote the website
      const response = await axios.post(
        `http://localhost:5001/api/voting/upvote`,
        { id }
      );
      if (response.status === 200) {
        // Update the votes count in the frontend
        setWebsites((prev) =>
          prev.map((website) =>
            website._id === id
              ? { ...website, currentvotes: website.currentvotes + 1 }
              : website
          )
        );
      }
    } catch (error) {
      console.error("Error upvoting website:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto  py-12">
        <h1 className="text-4xl font-bold mb-6 font-extrabold text-blue-600 text-center">
          Current Websites
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((website) => (
            <Card key={website._id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>{website.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-normal"
                    onClick={() => toggleUrlExpansion(website._id)}
                  >
                    {expandedUrls[website._id] ? (
                      <ChevronUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 mr-1" />
                    )}
                    {expandedUrls[website._id] ? "Hide URL" : "Show URL"}
                  </Button>
                  {expandedUrls[website._id] && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {website.siteurl}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => upvoteWebsite(website._id)}
                    className="flex items-center"
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Upvote
                  </Button>
                  <span className="text-sm font-medium">
                    {website.currentvotes} votes
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentWebsites;
