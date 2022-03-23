export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('Welcome to tooensure css development');
  }
  return a + b;
};
