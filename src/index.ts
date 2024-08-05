async function test(): Promise<void> {
  console.log(process.env.TEST_VALUE);
  setTimeout(() => {
    return "hello";
  }, 1000);
}

await test();
