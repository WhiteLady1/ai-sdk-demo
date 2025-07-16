import { Chat } from "@/components/chat/chat";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col min-w-0 h-[calc(100vh-24px)] bg-background">
        <Chat />
      </main>
      <footer className="text-center text-xs text-stone-400">
        © WhiteLady 2025
      </footer>
    </div>
  );
}
