import logo from "./images/logo.jpg";
import cart from "./images/cart.jpg";
import user from "./images/user.jpg";
import clock from "./images/clock.jpg";
import search from "./images/search.jpg";
import wheel from "./images/wheel.jpg";
import transmission from "./images/transmission.jpg";
import banner from "./images/banner.jpg";
import product from "./images/product.jpg";
import addTo from "./images/addTo.jpg";
import grid from "./images/grid.svg";
import list from "./images/list.svg";
import close from "./images/close.svg";
import oil from "./images/oil.jpg";
import black from "./images/black.jpg";
import box from "./images/box.jpg";
import arrowDown from "./images/arrow-down.jpg";
import arrowUp from "./images/arrow-up.jpg";

const navList = [
  {
    id: 1,
    title: `Главная `,
    link: `/`,
  },
  {
    id: 2,
    title: `Каталог`,
    link: `/catalog`,
  },
  {
    id: 3,
    title: `Пагинация`,
    link: `/pagination`,
  },
  {
    id: 4,
    title: `Асинхронность`,
    link: `/async`,
  },
];
const select1 = [
  {
    id: 1,
    value: 2000,
  },
  {
    id: 2,
    value: 2002,
  },
  {
    id: 3,
    value: 2003,
  },
  {
    id: 4,
    value: 2004,
  },
  {
    id: 5,
    value: 2005,
  },
  {
    id: 6,
    value: 2006,
  },
];
const select2 = [
  {
    id: 1,
    value: `mers`,
  },
  {
    id: 2,
    value: `bmw`,
  },
  {
    id: 3,
    value: `audi`,
  },
  {
    id: 4,
    value: `toyota`,
  },
  {
    id: 5,
    value: `suzuki`,
  },
  {
    id: 6,
    value: `wolkswagen`,
  },
];
const select3 = [
  {
    id: 1,
    value: `X`,
  },
  {
    id: 2,
    value: `L`,
  },
  {
    id: 3,
    value: `XXL`,
  },
  {
    id: 4,
    value: `S`,
  },
  {
    id: 5,
    value: `M`,
  },
  {
    id: 6,
    value: `D`,
  },
];
const select4 = [
  {
    id: 1,
    value: `Big`,
  },
  {
    id: 2,
    value: `Average`,
  },
  {
    id: 3,
    value: `Small`,
  },
];
const select5 = [
  {
    id: 1,
    value: `Львов`,
  },
  {
    id: 2,
    value: `Киев`,
  },
  {
    id: 3,
    value: `Житомир`,
  },
  {
    id: 4,
    value: `Тернополь`,
  },
  {
    id: 5,
    value: `Ужгород`,
  },
];

const markList = [
  {
    id: 1,
    title: `DENSO`,
    status: false
  },
  {
    id: 2,
    title: `FEBI`,
    status: false
  },
  {
    id: 3,
    title: `NGK`,
    status: false
  },
  {
    id: 4,
    title: `NISSAN`,
    status: false
  },
  {
    id: 5,
    title: `RENAULT`,
    status: false
  },
  {
    id: 6,
    title: `VAG`,
    status: false
  },
];

const stateList = [
  {
    id: 1,
    title: `Все`,
  },
  {
    id: 2,
    title: `Новые`,
  },
  {
    id: 3,
    title: `Б/у`,
  },
];
const sortList = [
  {
    id: 1,
    title: `по дате объявления`,
  },
  {
    id: 2,
    title: `по цене`,
  },
  {
    id: 3,
    title: `по рейтингу`,
  },
];
const tabs = [
  {
    id: 1,
    title: `Продавцы`,
  },
  {
    id: 2,
    title: `Отзывы`,
  },
  {
    id: 3,
    title: `Характеристики`,
  },
];

const products = [
  {
    id: 1,
    img: product,
    title: `дисковые`,
    company: `DENSO`,
    price: 1000,
    city: `Львов`,
    state: `Новые`,
    rating: 1,
    date: `2016-07-1`,
    amount: 1
  },
  {
    id: 2,
    img: product,
    title: `Колодки`,
    company: `FEBI`,
    price: 99999,
    city: `Киев`,
    state: `Новые`,
    rating: 2,
    date: `2016-07-2`,
    amount: 1
  },
  {
    id: 3,
    img: product,
    title: `тормозные`,
    company: `NGK`,
    price: 2000,
    city: `Житомир`,
    state: `Новые`,
    rating: 3,
    date: `2016-07-3`,
    amount: 1
  },
  {
    id: 4,
    img: product,
    title: `Абоба`,
    company: `NISSAN`,
    price: 5000,
    city: `Тернополь`,
    state: `Новые`,
    rating: 4,
    date: `2016-07-4`,
    amount: 1
  },
  {
    id: 5,
    img: product,
    title: `Глубинный`,
    company: `RENAULT`,
    price: 10000,
    city: `Ужгород`,
    state: `Новые`,
    rating: 5,
    date: `2016-07-6`,
    amount: 1
  },
  {
    id: 6,
    img: product,
    title: `Народ`,
    company: `VAG`,
    price: 30000,
    city: `Львов`,
    state: `Б/у`,
    rating: 1,
    date: `2016-07-11`,
    amount: 1
  },
  {
    id: 7,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `DENSO`,
    price: 60000,
    city: `Киев`,
    state: `Б/у`,
    rating: 2,
    date: `2016-07-12`,
    amount: 1
  },
  {
    id: 8,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `FEBI`,
    price: 70000,
    city: `Тернополь`,
    state: `Б/у`,
    rating: 3,
    date: `2016-07-8`,
    amount: 1
  },
  {
    id: 9,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `NGK`,
    price: 80000,
    city: `Житомир`,
    state: `Б/у`,
    rating: 4,
    date: `2016-07-9`,
    amount: 1
  },
  {
    id: 10,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `NISSAN`,
    price: 99999,
    city: `Тернополь`,
    state: `Б/у`,
    rating: 5,
    date: `2016-07-10`,
    amount: 1
  },
  {
    id: 11,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `RENAULT`,
    price: 11111,
    city: `Ужгород`,
    state: `Б/у`,
    rating: 1,
    date: `2016-07-15`,
    amount: 1
  },
  {
    id: 12,
    img: product,
    title: `Колодки тормозные дисковые`,
    company: `VAG`,
    price: 22222,
    city: `Львов`,
    state: ``,
    rating: 2,
    date: `2016-07-29`,
    amount: 1,
  },
];
const cartList = [
  {
    id: 1,
    img: product,
    title: `дисковые`,
    company: `DENSO`,
    price: 1000,
    city: `Львов`,
    state: `Новые`,
    rating: 1,
    date: `2016-07-1`,
    amount: 1
  },
  {
    id: 2,
    img: product,
    title: `дисковые`,
    company: `DENSO`,
    price: 1000,
    city: `Львов`,
    state: `Новые`,
    rating: 1,
    date: `2016-07-1`,
    amount: 1
  },
];
const sellers = [
  {
    id: 1,
    name: `Happy store`,
    rating: 5,
    reviews: 130,
    city: `Киев`,
    data: `Под заказ, до 10 дней`,
    amount: 1,
    state: `Новый`,
    price: 16385,
    isService: true,
  },
  {
    id: 2,
    name: `TechnoSklad`,
    rating: 4,
    reviews: 88,
    city: `Львов`,
    data: `Под заказ, до 10 дней`,
    amount: 2,
    state: `Старый`,
    price: 18385,
    isService: true,
  },
  {
    id: 3,
    name: `Ecomi-kz`,
    rating: 4,
    reviews: 120,
    city: `Сумы`,
    data: `Под заказ, до 10 дней`,
    amount: 3,
    state: `Новый`,
    price: 20385,
    isService: false,
  },
  {
    id: 4,
    name: `smart-buyer kz`,
    rating: 5,
    reviews: 0,
    city: `Алматы`,
    data: `Под заказ, до 10 дней`,
    amount: 4,
    state: `Новый`,
    price: 21000,
    isService: false,
  },
  {
    id: 5,
    name: `Michelle Digital`,
    rating: 2,
    reviews: 0,
    city: `Чернигов`,
    data: `Под заказ, до 10 дней`,
    amount: 5,
    state: `Новый`,
    price: 21500,
    isService: false,
  },
];

const sliderList = [
  {
    id: 1,
    img: box,
    price: 1,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 2,
    img: box,
    price: 2,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 3,
    img: box,
    price: 3,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 4,
    img: box,
    price: 4,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 5,
    img: box,
    price: 5,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 6,
    img: box,
    price: 6,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 7,
    img: box,
    price: 7,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 8,
    img: box,
    price: 8,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 9,
    img: box,
    price: 9,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
  {
    id: 10,
    img: box,
    price: 10,
    title: `RENAULT Корпус фильтра масляного (с радиатором)`,
  },
];

const slider = [
  {
    id: 0,
    img: oil,
  },
  {
    id: 1,
    img: wheel,
  },
  {
    id: 2,
    img: transmission,
  },
  {
    id: 3,
    img: black,
  },
  {
    id: 4,
    img: product,
  },
]; 

export {
  slider,
  sellers,
  tabs,
  close,
  grid,
  list,
  select1,
  select2,
  select3,
  select4,
  select5,
  logo,
  cart,
  user,
  clock,
  search,
  navList,
  wheel,
  transmission,
  banner,
  product,
  products,
  addTo,
  markList,
  stateList,
  sortList,
  oil,
  arrowDown,
  arrowUp,
  cartList,
  sliderList,
};
