import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F4F4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 5 A 15 15 0 1 0 20 35 A 11.8 15 0 1 1 20 5 Z"
            fill="#FAF6F0"
          />
          <circle cx="11.5" cy="14" r="2.2" fill="#B08A4F" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
