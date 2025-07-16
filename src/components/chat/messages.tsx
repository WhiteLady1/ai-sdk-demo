import { UIMessage } from "ai";
import { MessageItem } from "./message-item";

export const Messages = ({
  messages,
  isPending,
}: {
  messages: UIMessage[];
  isPending: boolean;
}) => {
  return (
    <div className="md:mt-20 px-4 size-full flex flex-col gap-7">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          role={message.role === "user" ? "user" : "ai"}
          content={message.content}
          isPending={isPending}
        />
      ))}
    </div>
  );
};
