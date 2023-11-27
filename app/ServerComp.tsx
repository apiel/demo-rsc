export const ServerComp = async () => {
  console.log("My server component");
  // Do some slow magic
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("My server component timer done");

  return <div>My server component</div>;
};
