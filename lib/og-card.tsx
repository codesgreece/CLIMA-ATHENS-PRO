import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070A",
          color: "#F5F7FA",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              color: "#9CA8B5",
            }}
          >
            PROFESSIONAL HVAC SERVICES
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              fontWeight: 650,
              letterSpacing: 6,
              lineHeight: 0.95,
            }}
          >
            CLIMA
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 42,
              letterSpacing: 10,
              color: "#65D9FF",
            }}
          >
            ATHENS PRO
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", fontSize: 32, color: "#9CA8B5" }}>
            <div>Attica + Salamina</div>
            <div style={{ marginTop: 8 }}>Installation · Service · Repair</div>
          </div>
          <div style={{ fontSize: 48, fontWeight: 650, letterSpacing: 1 }}>693 151 4831</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
