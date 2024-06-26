import { writeFile, readdir, unlink, readFile } from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { imgArray, chunkIndex, totalChunks } = await request.json();

  try {
    // Process each image in the array
    const savePromises = imgArray.map(async (imageData: string, index: number) => {
      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, 'base64');

      const filename = `./public/temp_${chunkIndex}_${index}.png`;
      await writeFile(filename, buffer);
      console.log(`Saved ${filename}`);

      return filename;
    });

    const savedFiles = await Promise.all(savePromises);

    // If this is the last chunk, combine all files
    if (parseInt(chunkIndex) === totalChunks - 1) {
      const directory = "./public";
      const files = await readdir(directory);
      const tempFiles = files.filter(file => file.startsWith("temp_"));
      tempFiles.sort((a, b) => {
        const [aChunk, aIndex] = a.replace("temp_", "").split("_");
        const [bChunk, bIndex] = b.replace("temp_", "").split("_");
        return parseInt(aChunk) - parseInt(bChunk) || parseInt(aIndex) - parseInt(bIndex);
      });

      for (let i = 0; i < tempFiles.length; i++) {
        const oldPath = path.join(directory, tempFiles[i]);
        const newPath = path.join(directory, `${i}.png`);
        await writeFile(newPath, await readFile(oldPath));
        await unlink(oldPath);
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "All images saved and combined successfully",
          totalImages: tempFiles.length
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: true,
          message: `Chunk ${chunkIndex} saved successfully`,
          savedFiles
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error saving images:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error saving images" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}