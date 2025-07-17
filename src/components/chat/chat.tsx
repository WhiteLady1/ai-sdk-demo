"use client";

import * as React from "react";
import { Greetings } from "./greetings";
import { MessageItem, MessageItemProps } from "./message-item";
import { PromptInput } from "./prompt-input";

export const Chat = () => {
  const [isPending, setIsPending] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [messages, setMessages] = React.useState<MessageItemProps[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;
    setMessages([
      ...messages,
      { role: "user", content: message, isPending: true },
    ]);
    console.log(prompt);
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col min-w-0 w-full max-w-xl mx-auto gap-6 flex-1 overflow-y-scroll pt-4 relative">
        {messages.length > 0 ? (
          <div className="md:mt-20 px-4 size-full flex flex-col gap-4">
            {messages.map((message) => (
              <MessageItem
                key={message.content}
                role={message.role}
                content={message.content}
                isPending={message.isPending}
              />
            ))}
          </div>
        ) : (
          <Greetings />
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full max-w-xl"
      >
        <PromptInput
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          isPending={isPending}
        />
      </form>
    </>
  );
};
