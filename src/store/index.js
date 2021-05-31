import { createStore } from 'vuex'

export default createStore({
  state: { /* в объекте state мы храним данные, к которым будут обращаться разные компоненты */
    categories: [
      {
        cat : "computers"
      },
      {
        cat : "tablets"
      },
      {
        cat: "smartphones"
      }
    ],
    goods : [
      {
        id: 1,
        name: "Смартфон Xiaomi Redmi Note 10 4+64GB Gray",
        price: 17990,
        description: "В смартфоне Xiaomi Redmi Note 10 установлен 6,43-дюймовый дисплей с разрешением 2400 х 1800 пикселей, созданный по технологии AMOLED. Плюсы такого дисплея – большой размер, яркость, реалистичная цветопередача и отличная детализация. Это именно то, что нужно для игр и просмотра фильмов.",
        img: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],
        category: "smartphones",
        available: true 
      },
      {
        id: 2,
        name: "Смартфон Samsung Galaxy S21 128GB Phantom Violet (SM-G991B)",
        price: 62490,
        description: "Samsung вступает в новую эру, представляя новую линейку флагманских смартфонов, которые одной левой укладывают на лопатки предшественников. Samsung Galaxy S21 показывает прыть в самых популярных приложениях, снимает на уровне фотокамер и демонстрирует феноменально яркую картинку на большом экране.",
        img: ["img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"],
        category: "smartphones",
        available: true 
      },
      {
        id: 3,
        name: "Смартфон Samsung Galaxy A32 64GB Awesome Black (SM-A325F)",
        price: 17990,
        description: "Смартфон Samsung Galaxy A32 выделяется оригинальным дизайном. Каждый объектив его основной камеры установлен отдельно, в небольшом круглом выступе. Он скорее похож на флагманы корейского бренда в 2021 году, чем на бюджетного предшественника.",
        img: ["img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg"],
        category: "tablets",
        available: true 
      },
      {
        id: 4,
        name: "Смартфон Samsung Galaxy A52 256GB Awesome Black (SM-A525F)",
        price: 32990,
        description: "Смартфон Samsung Galaxy A52 с новым дизайном задаёт тренд! Его выступающий блок камер окрашен в цвет корпуса, что создаёт ощущение целостности и гармонии. Стеклопластиковая задняя панель долго остаётся гладкой и приятной на ощупь. Устройство соответствует классу IP67 – оно продолжает работать на глубине до метра под водой.",
        img: ["img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg"],
        category: "tablets",
        available: true 
      },
      {
        id: 5,
        name: "Смартфон Samsung Galaxy Note 20 Ultra 256GB Black (SM-N985F/DS)",
        price: 74990,
        description: "Смартфон Samsung Galaxy Note 20 Ultra представляет собой сочетание стильного дизайна, высокой вычислительной мощи и безупречной надёжности. Его корпус, сделанный из алюминия и закалённого стекла Corning Gorilla Glass Victus защищён от пыли и влаги в соответствии со стандартом IP68. Ему не страшно погружение под воду на глубину до 1,5 м на срок до получаса.",
        img: ["img/21.jpg", "img/22.jpg", "img/23.jpg", "img/24.jpg", "img/25.jpg"],
        category: "computers",
        available: true 
      },
     ]
  },
  getters: { 
    availableGoods(state) {
      return state.goods.filter(good => good.available);
    },
    categoriesName(state) {
      return state.categories;
    },
    bookById: state => (id) => {// передаем все данные (id), которые хотим передать в геттер
      return state.goods.filter(good => good.id == id)[0]; // вернет массив и [0] вернет объект
    }
  }
})
