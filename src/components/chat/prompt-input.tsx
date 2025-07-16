import { Loader2Icon, SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const PromptInput = ({
  value,
  onChange,
  isLoading,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="border-1 border-zinc-200 rounded-lg p-1 bg-zinc-50 relative">
        <Textarea
          name="message"
          className="resize-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 mb-9"
          value={value}
          onChange={onChange}
          placeholder="Write a message..."
        />
        <Button
          size="icon"
          className="absolute bottom-2 right-2 hover:cursor-pointer"
          type="submit"
          disabled={value === ""}
        >
          {isLoading ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            <SendHorizonal />
          )}
        </Button>
      </div>
    </div>
  );
};
