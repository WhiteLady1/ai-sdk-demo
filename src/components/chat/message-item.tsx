import { Squirrel } from "lucide-react";

const USER = "user" as const;
const AI = "ai" as const;

export type Role = typeof USER | typeof AI;

export interface MessageItemProps {
  role: Role;
  author?: string;
  content: string;
  isLoading?: boolean;
}
export const MessageItem = ({
  role,
  author,
  content,
  isLoading = false,
}: MessageItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      {role === USER && (
        <div className="flex justify-end">
          <p className="bg-stone-800 text-white px-4 py-2 rounded-lg w-fit">
            {content}
          </p>
        </div>
      )}
      {role === AI && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center rounded-full p-2 w-10 h-10 bg-stone-100">
              <Squirrel className=" stroke-stone-800" />
            </span>
            {isLoading ? (
              <p className="animate-pulse">Hm...</p>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
