export function BgBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="animate-float-slow absolute -left-48 -top-32 size-[600px] rounded-full opacity-[0.22] blur-[120px]"
        style={{ background: "var(--apple-blue)" }}
      />
      <div
        className="animate-float-slow-rev absolute right-[-280px] top-[18%] size-[640px] rounded-full opacity-[0.18] blur-[140px]"
        style={{ background: "var(--apple-purple)" }}
      />
      <div
        className="animate-float-slow absolute bottom-[-160px] left-[8%] size-[560px] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "var(--apple-green)" }}
      />
      <div
        className="animate-float-slow-rev absolute right-[10%] bottom-[10%] size-[420px] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "var(--apple-orange)" }}
      />
    </div>
  );
}
