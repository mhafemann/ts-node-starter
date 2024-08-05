import { cwd } from 'node:process';
import { pathToFileURL } from 'node:url';

// test function
console.log(pathToFileURL(cwd()));

// async test function
async function test(): Promise<void> {
	console.log(process.env.TEST_VALUE);
	console.log('setTimeOut');

	setTimeout(() => {
		console.log('setTimeOut resolved');
		return 'hello';
	}, 1000);
}

// top level await
await test();
