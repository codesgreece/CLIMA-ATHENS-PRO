export function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <p className="text-text">
        <span className="block text-[2.6rem] font-semibold leading-none tracking-[0.16em] sm:text-5xl">
          CLIMA
        </span>
        <span className="mt-2 block text-base font-medium leading-none tracking-[0.32em] text-accent sm:text-lg">
          ATHENS PRO
        </span>
      </p>
    );
  }

  return (
    <span className="block text-left">
      <span className="block text-[13px] font-semibold leading-none tracking-[0.16em] text-text">
        CLIMA
      </span>
      <span className="mt-1 block text-[10px] font-medium leading-none tracking-[0.24em] text-accent">
        ATHENS PRO
      </span>
    </span>
  );
}
