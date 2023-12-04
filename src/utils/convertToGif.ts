import { gsap } from 'gsap';
import GIF from 'gif.js';

const convertToGif = (targetSelector: string, options: GIF.Options = {}): Promise<Blob> => {
  return new Promise((resolve) => {
    const gifEncoder = new GIF(options);

    // Get the animated element
    const targetElement = document.querySelector(targetSelector) as HTMLCanvasElement;

    // Create a canvas to capture frames
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = targetElement.offsetWidth;
    canvas.height = targetElement.offsetHeight;

    // GSAP timeline to capture frames
    const tl = gsap.timeline({
      onUpdate: () => {
        // Draw the current frame to the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(targetElement, 0, 0, canvas.width, canvas.height);

        // Add the frame to the gif
        gifEncoder.addFrame(ctx, { copy: true, delay: 100 }); // Adjust the delay as needed
      },
      onComplete: () => {
        // Finish the gif encoding
        gifEncoder.on('finished', (blob: any) => {
          resolve(blob);
        });

        gifEncoder.render();
      },
    });

    // Add your GSAP animation
    tl.to(targetSelector, { x: 200, rotation: 360, duration: 2 });

    // Start capturing frames
    tl.play();
  });
};

export default convertToGif;
