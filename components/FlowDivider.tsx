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
    const gridLines = [
      "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
      "linear-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(37,99,235,0.14) 1px, transparent 1px)",
    ].join(", ");

    return (
      <div className="relative h-[560px] -mt-px -mb-px overflow-hidden">
        {/* Layer 1 — graph paper base, exactly matches the section below */}
        <div className="absolute inset-0" style={{ background: to }} />

        {/* Layer 2 — blueprint grid, full coverage, always present */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridLines,
            backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
          }}
        />

        {/* Layer 3 — hero gradient dissolves away via mask, revealing grid beneath.
            The color doesn't go through white — it peels back and the grid
            was always sitting underneath it the whole time. */}
        <div
          className="absolute inset-0 hero-gradient"
          style={{
            maskImage:
              "linear-gradient(180deg, black 0%, black 12%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.65) 46%, rgba(0,0,0,0.28) 64%, rgba(0,0,0,0.06) 80%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 0%, black 12%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.65) 46%, rgba(0,0,0,0.28) 64%, rgba(0,0,0,0.06) 80%, transparent 92%)",
          }}
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
