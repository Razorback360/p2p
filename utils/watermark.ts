import { exec, execSync } from "child_process";
import path from "path";

const WATERMARK = process.env.WATERMARK_FILE;

const watermark = (video: string) => {
  console.log(WATERMARK);
  execSync(
    `${path.join("__dirname", "../utils/ffmpeg.exe")} -i ${path.join(
      "__dirname",
      "../public/videos/"
    )}${video} -i ${path.join(
      "__dirname",
      "../public/videos/"
    )}${WATERMARK} -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.99[logo];[logo][0]scale2ref=oh*mdar:ih*0.15[logo][video];[video][logo]overlay" -crf 18 ${path.join(
      "__dirname",
      "../public/videos/"
    )}output.${video.substring(video.lastIndexOf(".") + 1)}`
  );
  return `output.${video.substring(video.lastIndexOf(".") + 1)}`;
};

export default watermark;
