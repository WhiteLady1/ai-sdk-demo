"use client";

import * as React from "react";
import { Greetings } from "./greetings";
import { Messages } from "./messages";
import { PromptInput } from "./prompt-input";
import { useChat } from "@ai-sdk/react";

export const Chat = () => {
  const { messages, input, status, handleInputChange, handleSubmit } =
    useChat();

  return (
    <>
      <div className="flex flex-col min-w-0 w-full max-w-xl mx-auto gap-6 flex-1 overflow-y-scroll pt-4 relative">
        {messages.length > 0 ? (
          <Messages
            messages={messages}
            isPending={status === "submitted"}
          />
        ) : (
          <Greetings />
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full max-w-xl"
      >
        <PromptInput
          value={input}
          onChange={handleInputChange}
          isPending={status === "submitted" || status === "streaming"}
        />
      </form>
    </>
  );
};
