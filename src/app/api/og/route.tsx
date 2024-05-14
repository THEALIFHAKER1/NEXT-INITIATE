/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/configs/site";
import { env } from "@/env.mjs";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: "8px",
            border: "8px solid white",
          }}
        >
          <img
            width={300}
            height={300}
            src={`${env.NEXT_PUBLIC_APP_URL}/icons/icon-512x512.png`}
            alt=""
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
