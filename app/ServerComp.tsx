export const ServerComp = async () => {
  console.log("My server component");

  // Edit file message.txt in your IDE and you will see that change are not reflected
  // This is because of the built-in cache system from next.js
  const response = await fetch("http://localhost:3000/api/hello");

  return <div>My server component: {await response.text()}</div>;
};
