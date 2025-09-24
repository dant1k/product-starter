export const greet = (name: string) => `hello, ${name}`;
if (import.meta.url === `file://${process.argv[1]}`) console.log(greet(process.argv[2] ?? 'world'));
