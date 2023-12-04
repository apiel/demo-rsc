import type { NextApiRequest, NextApiResponse } from "next";

import { readFile } from "fs/promises";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const tsconfig = await readFile("message.txt", "utf8");
  res.status(200).json({ message: `Hello from Next.js! [${tsconfig}]` });
}
