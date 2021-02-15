import '@testing-library/jest-dom';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    // 消除来自于 src/ErrorBoudary.test.js 错误输出
    console.log('🌺', args[0].toString().includes('InvalidComponent'));
    if (args[0].toString().includes('InvalidComponent')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
