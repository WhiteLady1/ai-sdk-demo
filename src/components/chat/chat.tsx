"use client";

import * as React from "react";
import { Greetings } from "./greetings";
import { MessageItemProps } from "./message-item";
import { Messages } from "./messages";
import { PromptInput } from "./prompt-input";

export const Chat = () => {
  const [isPending, setIsPending] = React.useState(false);
  const [message, setMessage] = React.useState("");
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
    console.log(message);
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col min-w-0 w-full max-w-xl mx-auto gap-6 flex-1 overflow-y-scroll pt-4 relative">
        {messages.length > 0 ? <Messages messages={messages} /> : <Greetings />}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full max-w-xl"
      >
        <PromptInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          isPending={isPending}
        />
      </form>
    </>
  );
};
