import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "grid md:grid-rows-[20px_1fr_20px] items-center justify-items-center",
        "min-h-screen px-8 gap-16",
        "font-[family-name:var(--font-geist-sans)]"
      )}
    >
      <div className="flex flex-col gap-4 md:row-start-2 md:items-center items-start">
        <div className="text-center">
          <span className="font-extrabold text-5xl md:text-6xl">
            A new way of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-400">
              planning
            </span>{" "}
            your semester
          </span>
        </div>
        <div
          className={cn("p-2", "font-mono text-sm md:text-base text-center")}
        >
          <span>
            Save time and nerves with this new application. Plan faster than
            ever before and get a better overview of your schedule.
          </span>
        </div>
      </div>
    </main>
  );
}
