interface ITestData {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDiscounted?: number;
  title: string;
  description: string;
  seller: string;
}

const testData: ITestData[] = [
  {
    id: 1,
    slug: 'first',
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    priceDiscounted: 9000,
    title: 'Телевизор',
    description: 'Вот такой вот',
    seller: 'Some shop',
  },
  {
    id: 2,
    slug: 'second',
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    priceDiscounted: 9000,
    title: 'Телевизор',
    description: 'Вот такой  spdlfsld;flsd;f ; ; ; k k fkds kk ',
    seller: 'Some shop',
  },
  {
    id: 3,
    slug: 'third',
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    title: 'Телевизор',
    description: 'Вот такой вот',
    seller: 'Some shop',
  },
  {
    id: 4,
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    title: 'Телевизор',
    description: 'Вот такой вот',
    seller: 'Some shop',
  },
  {
    id: 5,
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    title: 'Телевизор',
    description: 'Вот такой вот',
    seller: 'Some shop',
  },
  {
    id: 6,
    imgSrc: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id5335194020855380889.png/600x800',
    priceRegular: 10000,
    title: 'Телевизор',
    description: 'Вот такой вот',
    seller: 'Some shop',
  },
];

export default testData;
