import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  AlertTriangle,
  Phone,
  MessageSquare,
  Mail,
  Smartphone,
} from "lucide-react";

const ScamPreventionGuide = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
          How to Avoid Getting Scammed: A Guide for Older Citizens
        </h1>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Stay Vigilant</AlertTitle>
          <AlertDescription>
            Scammers often target people through various communication channels.
            They may impersonate trusted organizations or individuals to trick
            you into giving them money, personal information, or installing
            harmful applications.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="phone-scams"
            className="border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                <span>Phone Scams</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              <h3 className="font-semibold mb-2 text-lg">Common Tactics:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                  Impersonating Government Agencies: Scammers might claim to be
                  from the IRS, Medicare, or Social Security.
                </li>
                <li>
                  Lottery or Prize Scams: You're told you've won something but
                  need to pay a fee to claim your prize.
                </li>
                <li>
                  Tech Support Scams: A scammer says your computer or phone is
                  infected and asks you to install software for "repair."
                </li>
              </ul>
              <h3 className="font-semibold mb-2 text-lg">
                How to Protect Yourself:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Don't answer calls from unknown numbers. Let them go to
                  voicemail.
                </li>
                <li>
                  Never give personal information like your Social Security
                  number or bank details over the phone.
                </li>
                <li>
                  Hang up if they pressure you to act quickly or ask for payment
                  through unusual methods (gift cards, wire transfers).
                </li>
                <li>
                  If in doubt, call the company or organization directly using a
                  verified number.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="text-scams"
            className="border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100 transition-colors">
              <div className="flex items-center ">
                <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                <span>Text Message Scams</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              <h3 className="font-semibold mb-2 text-lg">Common Tactics:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                  Fake Account Alerts: A scammer claims there's a problem with
                  your bank account or credit card.
                </li>
                <li>
                  Links to Install Apps or Claim Prizes: Clicking these may
                  install malware on your phone.
                </li>
                <li>
                  Delivery Scams: You get a message saying a package can't be
                  delivered and you need to click a link to resolve the issue.
                </li>
              </ul>
              <h3 className="font-semibold mb-2 text-lg">
                How to Protect Yourself:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Don't click on links from unknown senders.</li>
                <li>
                  Verify any message by calling the company directly using a
                  verified phone number.
                </li>
                <li>
                  Be wary of messages urging you to act immediately or offering
                  rewards or prizes that seem too good to be true.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="email-scams"
            className="border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-500" />
                <span>Email Scams</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              <h3 className="font-semibold mb-2 text-lg">Common Tactics:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                  Phishing Emails: Scammers pretend to be a trusted company,
                  asking you to click a link or download an attachment.
                </li>
                <li>
                  Fake Invoices or Bills: You receive a bill for a service you
                  didn't use.
                </li>
                <li>
                  Impersonating Family or Friends: Scammers may hack someone's
                  account or create a fake one and ask you for help or money.
                </li>
              </ul>
              <h3 className="font-semibold mb-2 text-lg">
                How to Protect Yourself:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Never open attachments or click on links in unsolicited
                  emails.
                </li>
                <li>
                  Verify the sender by checking the email address carefully
                  (scammers often use addresses that look similar to real ones).
                </li>
                <li>Use email filters to block spam or scam emails.</li>
                <li>
                  Don't install any software that is requested via email unless
                  you are 100% sure it is from a trusted source.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="app-scams"
            className="border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5 text-purple-500" />
                <span>App Installation Scams</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              <p className="mb-4">
                Scammers may ask you to install apps to "fix" problems on your
                device or access exclusive deals. These apps can steal your
                information or give scammers control of your device.
              </p>
              <h3 className="font-semibold mb-2 text-lg">
                How to Protect Yourself:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Only download apps from official app stores (Apple App Store,
                  Google Play Store).
                </li>
                <li>
                  Don't install any app unless you initiated the request or
                  trust the source completely.
                </li>
                <li>
                  Check app reviews and ratings before installing, and be wary
                  of apps with few or no reviews.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              What to Do If You Encounter a Scam
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong className="text-lg">Stop All Communication:</strong>
                <p className="mt-1">
                  If you think you're dealing with a scammer, stop replying to
                  their calls, texts, or emails immediately.
                </p>
              </li>
              <li>
                <strong className="text-lg">Report It:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    FTC: Report the scam to the Federal Trade Commission (FTC)
                    at{" "}
                    <a
                      href="https://reportfraud.ftc.gov/assistant"
                      className="text-blue-500"
                    >
                      Click Here
                    </a>
                    .
                  </li>

                  <li>
                    State Consumer Protection Office: Contact your state's
                    office for further guidance.
                  </li>
                  <li>
                    Local Authorities: Report scams to local law enforcement,
                    especially if you've lost money or personal information.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-lg">Contact Your Bank:</strong>
                <p className="mt-1">
                  If you've provided financial information, contact your bank or
                  credit card company to secure your accounts.
                </p>
              </li>
              <li>
                <strong className="text-lg">Freeze Your Credit:</strong>
                <p className="mt-1">
                  If your personal information was stolen, consider freezing
                  your credit with major bureaus (Experian, Equifax,
                  TransUnion).
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Useful Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                {
                  name: "Federal Trade Commission (FTC)",
                  url: "https://www.ftc.gov",
                },
                {
                  name: "National Do Not Call Registry",
                  url: "https://www.donotcall.gov",
                },
                {
                  name: "AARP Fraud Watch Network",
                  url: "https://www.aarp.org/money/scams-fraud",
                },
                {
                  name: "USA.gov Scams and Frauds",
                  url: "https://www.usa.gov/scams-and-frauds",
                },
              ].map((link, index) => (
                <li key={index}>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a
                      href={link.url}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScamPreventionGuide;
