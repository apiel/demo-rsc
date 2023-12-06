"use client";

import { Suspense, useEffect, useState } from "react";
import { ServerComp2 } from "./ServerComp2";
// import { SharedComp } from "./SharedComp";

export const ClientComp = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  // Use effect hook to fix Error: Server Functions cannot be called during initial render...
  useEffect(() => {
    setValue("demo");
  }, []);

  return (
    <div>
      {/* <SharedComp /> */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== undefined && (
        <Suspense fallback={<div>Loading...</div>}>
          <ServerComp2 value={value} />
        </Suspense>
      )}
    </div>
  );
};
