"use client";

import { Suspense, useState } from "react";
import { ServerComp2 } from "./ServerComp2";

export const ClientComp = () => {
  const [value, setValue] = useState("demo");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ServerComp2 value={value} />
      </Suspense>
    </div>
  );
};
