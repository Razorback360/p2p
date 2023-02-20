import PersistentFile from "formidable/PersistentFile";

interface Upload {
  err?: any;
  fields: Fields;
  files: { file: PersistentFile };
}

interface Fields {
  title: string;
  description: string;
  uploaderName: string;
  uploaderEmail: string;
  code: string;
}
