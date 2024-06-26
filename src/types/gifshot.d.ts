declare module "gifshot" {
    interface Options {
      images: string[];
      gifWidth?: number;
      gifHeight?: number;
      interval?: number;
      numFrames?: number;
      frameDuration?: number;
      sampleInterval?: number;
      numWorkers?: number;
    }
  
    interface Callback {
      (obj: {
        image: string;
        error: boolean;
        errorCode?: string;
        errorMsg?: string;
        savedRenderingContexts?: any[];
        savedImages?: string[];
      }): void;
    }
  
    function createGIF(options: Options, callback: Callback): void;
  }