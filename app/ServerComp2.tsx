export const ServerComp2 = async ({ value }: { value: string }) => {
  console.log("My server component");
  // Do some slow magic
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("My server component timer done");

  return <div>My server component2 with val: {value}</div>;
};
