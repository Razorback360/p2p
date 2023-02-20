import { execSync } from "child_process";

const upload = async (video: string, title: string, description: string) => {
  const output = execSync(
    `python uploader.py --file="../public/videos/${video}" --title="${title}" --description="${description}" --category="22" --privacyStatus="private"`,
    { cwd: "utils" }
  );
  return output.toString();
};

export default upload;
