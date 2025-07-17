import { Squirrel } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center rounded-full p-2 w-10 h-10 bg-stone-100">
        <Squirrel className=" stroke-stone-800" />
      </span>
      <p>Hm...</p>
    </div>
  );
};
