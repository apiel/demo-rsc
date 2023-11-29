"use server";

import { readFile } from "fs/promises";

export const ServerComp2 = async ({ value }: { value: string }) => {
  // read tsconfig content
  const tsconfig = await readFile("message.txt", "utf8");

  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>
      My server component2 with val: {value} <code>{tsconfig}</code>
    </div>
  );
};
