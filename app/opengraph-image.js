import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Home | Dakan";
export const size = {
  width: 1500,
  height: 500,
};

export const contentType = "image/jpeg";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="relative flex w-full h-full items-center justify-center">
        <div tw="absolute flex inset-0">
          <img
            src="../public/assets/opengraph-image.jpeg"
            alt="Phygital"
            tw="flex flex-1"
            style={{ size }}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
