"use client";

import { Suspense, useEffect, useState } from "react";
import { ServerComp2 } from "./ServerComp2";
// import { SharedComp } from "./SharedComp";

/**
 * When rendered server side, value is undefined and svrComp, passed as props, is rendered
 * When rendered client side, value is defined, using the useEffect hook, the suspense start in loading state
 * till the new ServerComp2 is loaded
 * 
 * Actually, instead of the Loading state, we could put svrComp inside, so we would not notice the loading state...
 */
export const ClientComp = ({ svrComp }: { svrComp: React.ReactNode }) => {
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
      {value !== undefined ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ServerComp2 value={value} />
        </Suspense>
      ) : svrComp }
    </div>
  );
};
