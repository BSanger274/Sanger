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
      <div className="relative h-[480px] -mt-px -mb-px overflow-hidden">
        {/* Animated hero gradient — full coverage base */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Progressive white wash — drains colour slowly top → bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.52) 42%, rgba(255,255,255,0.82) 62%, rgba(255,255,255,0.96) 78%, #ffffff 100%)",
          }}
        />

        {/* Blueprint grid — eases in gently from the midpoint */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
              "linear-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(37,99,235,0.14) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
            maskImage:
              "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.7) 75%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.7) 75%, black 100%)",
          }}
        />

        {/* Blueprint colour cap — locks the bottom edge to the exact section bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: `linear-gradient(180deg, transparent, ${to})` }}
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
