import { createWriteStream, writeFile, readFileSync, readdirSync } from "fs";
import { createCanvas, loadImage, } from "canvas";
import GIFEncoder from "gifencoder";

export async function GET(request: Request) {
  const files = readdirSync("./public").filter((file) => file.endsWith(".png"));

  if (files.length === 0) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No images found",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const fileData = readFileSync(`./public/0.png`);
  const base64Data = fileData.toString("base64");
  const base64Png = `data:image/png;base64,${base64Data}`;

  const img = await loadImage(base64Png);

  const encoder = new GIFEncoder(img.width, img.height);
  encoder.createReadStream().pipe(createWriteStream("shit.gif"));

  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(1);
  encoder.setQuality(10);

  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < files.length; i++) {
    const fileData = readFileSync(`./public/${i}.png`);
    const base64Data = fileData.toString("base64");
    const base64Png = `data:image/png;base64,${base64Data}`;

    const img = await loadImage(base64Png);

    ctx.drawImage(img, 0, 0, img.width, img.height);
    encoder.addFrame(ctx );
  }

  encoder.finish();

  const buf = encoder.out.getData();
  writeFile("shit.gif", buf, function (err) {
    if (err) {
      console.error("Error writing GIF:", err);
    }
  });

  return new Response(JSON.stringify({ success: true, message: "GIF created successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}