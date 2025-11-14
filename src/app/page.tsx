import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4"> AI Voice Keyboard</h1>

      <p className="mb-6 text-muted-foreground text-center max-w-md">
        Speak instead of typing — start dictating instantly.
      </p>

      <Button>Start Recording</Button>
    </main>
  );
}
