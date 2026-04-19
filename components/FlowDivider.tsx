"use client";

export default function FlowDivider({
  kind,
  to,
  from,
  tag,
}: {
  kind: "bleed" | "stitch";
  to: string;
  from?: string;
  tag?: string;
}) {
  if (kind === "bleed") {
    return (
      <div className="relative h-64 -mt-px -mb-px overflow-hidden">
        {/* Hero gradient fading out */}
        <div className="absolute inset-0 hero-gradient" />
        {/* Blueprint grid fading in over the bottom half */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
              "linear-gradient(rgba(37,99,235,0.16) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(37,99,235,0.16) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
            maskImage: "linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.6) 60%, black 100%)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.6) 60%, black 100%)",
          }}
        />
        {/* Solid fade to blueprint background color */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, transparent 0%, rgba(248,251,255,0.4) 50%, ${to} 100%)` }}
        />
      </div>
    );
  }

  if (kind === "stitch") {
    return (
      <div className="relative h-28" style={{ background: to }}>
        <div
          className="absolute inset-x-0 top-0 h-16"
          style={{ background: `linear-gradient(180deg, ${from ?? "#fff"}, ${to})` }}
        />
        <div
          className="absolute inset-x-8 top-1/2 -translate-y-1/2 flow-stitch"
          style={{ color: "rgba(15,23,42,0.2)" }}
        />
        {tag && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-900 text-[10px] font-mono font-semibold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {tag}
          </div>
        )}
      </div>
    );
  }

  return null;
}
