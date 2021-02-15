import { TDetail } from 'web/models/booksDetailModel';

const booksList = [
  { id: 1, title: 'React v18 - 即将来袭' },
  { id: 2, title: 'TypeScript从0到精通' },
  { id: 3, title: '后端我们使用了BFF层' },
  { id: 4, title: 'Webpack使用了最新版本' },
  { id: 5, title: '前端测试我们使用了Jest' },
];

const booksDetails = [
  { id: 1, url: 'https://www.yidengfe.com/1' },
  { id: 2, url: 'https://www.yidengfe.com/2' },
  { id: 3, url: 'https://www.yidengfe.com/3' },
  { id: 4, url: 'https://www.yidengfe.com/4' },
  { id: 5, url: 'https://www.yidengfe.com/5' },
];

//模拟用户请求
export const getBooks = async (): Promise<typeof booksList> =>
  new Promise((resolve) => setTimeout(() => resolve(booksList), 500));

export const getBookById = async (id: number): Promise<TDetail> =>
  new Promise((resolve) => {
    let details = { id: -1, url: '' };
    const result = booksDetails.find((s) => s.id === id);
    if (result !== undefined) {
      details = result;
    }
    return setTimeout(() => resolve(details), 500);
  });
