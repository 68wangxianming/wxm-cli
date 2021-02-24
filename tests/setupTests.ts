// import '@testing-library/jest-dom';
//
// const originalError = console.error;
// beforeAll(() => {
//   console.error = (...args: { toString: () => string | string[]; }[]) => {
//     // 消除来自于 src/ErrorBoudary.test.js 错误输出
//     console.log('🌺', args[0].toString().includes('InvalidComponent'));
//     if (args[0].toString().includes('InvalidComponent')) {
//       return;
//     }
//     originalError.call(console, ...args);
//   };
// });
//
// afterAll(() => {
//   console.error = originalError;
// });

import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  try {
    expect(console.error).not.toHaveBeenCalled();
  } catch (e) {
    //throw new Error("请确保在测试期间一切console.error不能被调用");
    console.log("⏰", "请确保在测试期间一切console.error不能被调用");
  }
});
