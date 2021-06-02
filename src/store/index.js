import { createStore } from 'vuex'

export default createStore({
  state: { /* в объекте state мы храним данные, к которым будут обращаться разные компоненты */
    categories: [
      {
        cat : "Компьютеры"
      },
      {
        cat : "Смартфоны"
      },
      {
        cat: "Девайсы"
      },
      {
        cat: "Планшеты"
      },
      {
        cat: "Ноутбуки"
      },
      {
        cat: "Аксессуары"
      },
      {
        cat: "Бытовая техника"
      },
      {
        cat: "Телевизоры"
      },
      {
        cat: "Игровые приставки"
      }
    ],
    cart: [],
    goods: [
      {
        id: 1,
        shortName: "Смартфон Xiaomi Redmi Note 10",
        name: "Смартфон Xiaomi Redmi Note 10 4+64GB Gray",
        price: 17990,
        description: "В смартфоне Xiaomi Redmi Note 10 установлен 6,43-дюймовый дисплей с разрешением 2400 х 1800 пикселей, созданный по технологии AMOLED. Плюсы такого дисплея – большой размер, яркость, реалистичная цветопередача и отличная детализация. Это именно то, что нужно для игр и просмотра фильмов.",
        img: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        category: "Смартфоны",
        qtyInCart: 1
      },
      {
        id: 2,
        shortName: "Смартфон Samsung Galaxy S21",
        name: "Смартфон Samsung Galaxy S21 128GB Phantom Violet (SM-G991B)",
        price: 62490,
        description: "Samsung вступает в новую эру, представляя новую линейку флагманских смартфонов, которые одной левой укладывают на лопатки предшественников. Samsung Galaxy S21 показывает прыть в самых популярных приложениях, снимает на уровне фотокамер и демонстрирует феноменально яркую картинку на большом экране.",
        img: ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
        category: "Смартфоны",
        qtyInCart: 1 
      },
      {
        id: 3,
        shortName: "Смартфон Samsung Galaxy A32",
        name: "Смартфон Samsung Galaxy A32 64GB Awesome Black (SM-A325F)",
        price: 17990,
        description: "Смартфон Samsung Galaxy A32 выделяется оригинальным дизайном. Каждый объектив его основной камеры установлен отдельно, в небольшом круглом выступе. Он скорее похож на флагманы корейского бренда в 2021 году, чем на бюджетного предшественника.",
        img: ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"],
        category: "Смартфоны",
        qtyInCart: 1
      },
      {
        id: 4,
        shortName: "Смартфон Samsung Galaxy A52",
        name: "Смартфон Samsung Galaxy A52 256GB Awesome Black (SM-A525F)",
        price: 32990,
        description: "Смартфон Samsung Galaxy A52 с новым дизайном задаёт тренд! Его выступающий блок камер окрашен в цвет корпуса, что создаёт ощущение целостности и гармонии. Стеклопластиковая задняя панель долго остаётся гладкой и приятной на ощупь. Устройство соответствует классу IP67 – оно продолжает работать на глубине до метра под водой.",
        img: ["16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"],
        category: "Смартфоны",
        qtyInCart: 1
      },
      {
        id: 5,
        shortName: "Смартфон Samsung Galaxy Note 20",
        name: "Смартфон Samsung Galaxy Note 20 Ultra 256GB Black (SM-N985F/DS)",
        price: 74990,
        description: "Смартфон Samsung Galaxy Note 20 Ultra представляет собой сочетание стильного дизайна, высокой вычислительной мощи и безупречной надёжности. Его корпус, сделанный из алюминия и закалённого стекла Corning Gorilla Glass Victus защищён от пыли и влаги в соответствии со стандартом IP68. Ему не страшно погружение под воду на глубину до 1,5 м на срок до получаса.",
        img: ["21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg"],
        category: "Смартфоны",
        qtyInCart: 1 
      },
     ]
  },
  getters: { 
    availableGoods(state) {
      // return state.goods.filter(good => +(good.amount) > 0);
      return state.goods;
    },
    categoriesName(state) {
      return state.categories;
    },
    goodById: state => (id) => {
      return state.goods.filter(good => good.id == id)[0];
    },
    goodByCategory: state => (category) => {
      return state.goods.filter(good => good.category == category);
    },
    goodInCart(state) {
      return state.cart;
    }
  },
  mutations: {
    addToGoods: (state, good) => {
      state.goods = good;
    },

    // addToCart(state, good) {
    //   state.cart.push(good);
    // },

    addToCart: (state, good) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === good.id) {
            isProductExists = true;
            item.qtyInCart++
          }
        })
        if (!isProductExists) {
          state.cart.push(good)
        }
      } else {
        state.cart.push(good)
      }
    },
  },
})
