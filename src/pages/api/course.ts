import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@db/prisma";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case "GET": {
      const id = _req.query.id;
      const getAll = Boolean(_req.query.getAll);

      if (getAll) {
        const courses = await prisma.course.findMany();
        return res.status(200).json(courses);
      }

      const course = await prisma.course.findFirst({
        where: {
          id: id as string,
        },
        include:{subsections: true}
      });

      return course
        ? res.status(200).json(course)
        : res.status(404).json({ error: "Not Found" });
    }
    case "POST": {
      const name = _req.body.name;

      if (name) {
        const course = await prisma.course.create({
          data: {
            name: name as string,
          },
        });

        return res.status(200).json(course);
      }

      return res.status(404).json({ error: "Course name was not provided." });
    }
    case "PATCH": {
      const id = _req.body.id;
      const subsectionNames = _req.body.subNames;
      const subsectionList: { name: string }[] = [];

      if (id && subsectionNames) {
        if (typeof subsectionNames === "object") {
          subsectionNames.forEach((value) => {
            subsectionList.push({ name: value });
          });

          const course = await prisma.course.update({
            where: { id: id as string },
            data: {
              subsections: {
                createMany: {
                  data: subsectionList,
                },
              },
            },
            include: { subsections: true },
          });

          return course
            ? res.status(200).json(course)
            : res.status(404).json({ error: "Course not found." });
        }

        const course = await prisma.course.update({
          where: { id: id as string },
          data: {
            subsections: {
              create: {
                name: subsectionNames as string,
              },
            },
          },
          include: { subsections: true },
        });
        return course
          ? res.status(200).json(course)
          : res.status(404).json({ error: "Course not found." });
      }
      return res
        .status(404)
        .json({ error: "No course ID or subsection name was provided." });
    }
  }
};

export default handler;
