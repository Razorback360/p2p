import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { prisma } from "@db/prisma";
import { rename } from "fs/promises";
import watermark from "@p2p/utils/watermark";
import upload from "@p2p/utils/upload";
import { Upload } from "@p2p/types/types";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case "POST": {

      const data: Upload = await new Promise((resolve, reject) => {
        const form: any = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.uploadDir = "C:\\Projects\\p2p\\public\\videos";
        form.parse(_req, (err: any, fields: any, files: any) => {
          if (err) reject({ err });
          resolve({ err, fields, files });
        });
      });
      
      const title = data.fields.title;
      const description = data.fields.description;
      const name = data.fields.uploaderName;
      const email = data.fields.uploaderEmail;
      const code = data.fields.code;
     
      const file = JSON.parse(JSON.stringify(data.files.file));

      await prisma.code.findFirst({
        
      })

      //await rename(file.filepath, file.filepath.replace(file.newFilename, file.originalFilename))
      //const vidName = watermark(file.originalFilename)
      //const response  = await upload(vidName, "testo", "testeeeeeeee")
      //console.log(response)

      //      console.log(title, code, submitter, email, file)
      return res.status(200).json({ course: "hehe" });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
