"use server";

import { readFile } from "fs/promises";

export const ServerComp2 = async ({ value }: { value: string }) => {
  // read tsconfig content
  const tsconfig = await readFile("tsconfig.json", "utf8");

  console.log("My server component", { tsconfig });
  // Do some slow magic
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("My server component timer done");

  return (
    <div>
      My server component2 with val: {value} <code>{tsconfig}</code>
    </div>
  );
};
