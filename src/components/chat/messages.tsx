import { MessageItem, MessageItemProps } from "./message-item";

export const Messages = ({ messages }: { messages: MessageItemProps[] }) => {
  console.log(messages);
  return (
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
  );
};
