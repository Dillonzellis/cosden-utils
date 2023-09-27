export const slides = [
  {
    header: "header 1",
    body: "body 1",
    imgSrc: "https://www.cosden.org/images/banners/2023/refinance-sept2023.png",
    btnText: "learn more",
    btnLink: "/",
  },
  {
    header: "header 2",
    body: "body 2",
    imgSrc: "https://www.cosden.org/images/banners/2022/mobile-app.png",
  },
  {
    header: "header 3",
    body: "body 3",
    imgSrc: "https://www.cosden.org/images/banners/2023/credit-sense-3.png",
  },
  {
    header: "header 4",
    body: "body 4",
    imgSrc: "https://www.cosden.org/images/banners/education.jpg",
  },
];

export type SlideData = {
  dark?: boolean;
  header?: string;
  body?: string;
  imgSrc: string;
  btnText?: string;
  btnLink?: string;
};
