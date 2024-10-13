import React, { useState, useEffect } from "react";

const Support = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessageHistory = [
      ...messageHistory,
      { role: "user", parts: [{ text: userInput }] },
    ];

    setMessageHistory(newMessageHistory);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/gemini/speak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messageHistory: newMessageHistory,
          userInput,
        }),
      });

      const data = await response.json();
      setMessageHistory([
        ...newMessageHistory,
        { role: "model", parts: [{ text: data.response }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Title and subtitle */}
      <div className="text-center pt-10 pb-4">
        <h1 className="text-4xl font-extrabold text-blue-600">Live Support</h1>
        <p className="text-lg text-gray-600 mt-2">
          Talk to our live support assistant Proc!
        </p>
      </div>

      {/* Chatbox */}
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col space-y-4 h-96 overflow-y-auto">
            <div>
              <p className="bg-gray-200 text-black self-start p-4 break-words rounded-lg">
                Hi, I'm Proc, here to help you stay safe from scams! Have you
                noticed any suspicious calls, texts, or emails recently? I can
                guide you on avoiding risky downloads and staying protected.
              </p>
            </div>
            {messageHistory.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {message.parts[0].text}
              </div>
            ))}
          </div>

          {/* Input and Send Button */}
          <div className="mt-4 flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
