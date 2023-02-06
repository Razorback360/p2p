import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db/prisma";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case "GET": {
      const id = _req.query.id ? parseInt(_req.query.id as string) : null;

      if (!id)
        return res.status(404).json({ error: "No subsection was provided." });
      const subsection = await prisma.subsection.findFirst({
        where: {
          id: id,
        },
        include: { content: true },
      });

      return subsection
        ? res.status(200).json(subsection)
        : res.status(404).json({ error: "Not Found" });
    }
    case "PATCH": {
      const id = _req.body.id;
      const name = _req.body.name;
      const courseId = _req.body.courseId;

      if (!id || (!name && !courseId))
        return res
          .status(404)
          .json({ error: "No subsection or name or course ID was provided." });

      const subsection = await prisma.subsection.update({
        where: {
          id: id,
        },
        data: { name: name, courseId: courseId },
        include: { content: true },
      });

      return subsection
        ? res.status(200).json(subsection)
        : res.status(404).json({ error: "Not Found" });
    }
  }
};

export default handler;
