const delay = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const main = async () => {
  await delay(1000);
  console.log('1s');

  await delay(1000);
  console.log('2s');

  await delay(1000);
  console.log('3s');
};

main();
