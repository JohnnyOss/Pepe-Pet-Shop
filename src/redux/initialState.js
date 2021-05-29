export const initialState = {
  products: {
    data: [
    //   {
    //     id: '1',
    //     category: 'Food & Treats',
    //     title: 'Puppy dry food',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 3,
    //     image: ['/images/products/food1.jpg', '/images/products/food2.jpg', '/images/products/food3.jpg'],
    //   },
    //   {
    //     id: '2',
    //     category: 'Food & Treats',
    //     title: 'Wet food Westie',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 5,
    //     image: ['/images/products/food4.jpg', '/images/products/food5.jpg', '/images/products/food6.jpg'],
    //   },
    //   {
    //     id: '3',
    //     category: 'Food & Treats',
    //     title: 'Biscuits',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 10,
    //     image: ['/images/products/food7.jpg', '/images/products/food8.jpg', '/images/products/food9.jpg'],
    //   },
    //   {
    //     id: '4',
    //     category: 'Toys',
    //     title: 'Rope toy',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 5,
    //     image: ['/images/products/toy1.jpg', '/images/products/toy2.jpg', '/images/products/toy3.jpg'],
    //   },
    //   {
    //     id: '5',
    //     category: 'Toys',
    //     title: 'Snack ball',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 7,
    //     image: ['/images/products/toy4.jpg', '/images/products/toy5.jpg', '/images/products/toy6.jpg'],
    //   },
    //   {
    //     id: '6',
    //     category: 'Toys',
    //     title: 'Squeaker Bear',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 9,
    //     image: ['/images/products/toy7.jpg', '/images/products/toy8.jpg', '/images/products/toy9.jpg'],
    //   },
    //   {
    //     id: '7',
    //     category: 'Bowls',
    //     title: 'Ceramis Bowl',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 3,
    //     image: ['/images/products/ceramic1.jpg', '/images/products/ceramic2.jpg', '/images/products/ceramic3.jpg'],
    //   },
    //   {
    //     id: '8',
    //     category: 'Bowls',
    //     title: 'Bowl Stand',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 4,
    //     image: ['/images/products/bowlstand1.jpg', '/images/products/bowlstand2.jpg', '/images/products/bowlstand3.jpg'],
    //   },
    //   {
    //     id: '9',
    //     category: 'Bowls',
    //     title: 'Stainless bowl',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 5,
    //     image: ['/images/products/stainless1.jpg', '/images/products/stainless2.jpg', '/images/products/stainless3.jpg'],
    //   },
    //   {
    //     id: '10',
    //     category: 'Beds',
    //     title: 'Dog Den',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 20,
    //     image: ['/images/products/bed1.jpg', '/images/products/bed2.jpg', '/images/products/bed3.jpg'],
    //   },
    //   {
    //     id: '11',
    //     category: 'Beds',
    //     title: 'Oval Bed',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 23,
    //     image: ['/images/products/bed4.jpg', '/images/products/bed5.jpg', '/images/products/bed6.jpg'],
    //   },
    //   {
    //     id: '12',
    //     category: 'Beds',
    //     title: 'Ortopedic Bed',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 39,
    //     image: ['/images/products/bed7.jpg', '/images/products/bed8.jpg', '/images/products/bed9.jpg'],
    //   },
    //   {
    //     id: '13',
    //     category: 'Health & Wellness',
    //     title: 'Fruit Shampoo',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 10,
    //     image: ['/images/products/health1.jpg', '/images/products/health2.jpg', '/images/products/health3.jpg'],
    //   },
    //   {
    //     id: '14',
    //     category: 'Health & Wellness',
    //     title: 'Peach Wipes',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 12,
    //     image: ['/images/products/health4.jpg', '/images/products/health5.jpg', '/images/products/health6.jpg'],
    //   },
    //   {
    //     id: '15',
    //     category: 'Health & Wellness',
    //     title: 'Peach Care Spray',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 19,
    //     image: ['/images/products/health7.jpg', '/images/products/health8.jpg', '/images/products/health9.jpg'],
    //   },
    //   {
    //     id: '16',
    //     category: 'Leashes & Collars',
    //     title: 'Black leash',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 5,
    //     image: ['/images/products/leash1.jpg', '/images/products/leash2.jpg', '/images/products/leash3.jpg'],
    //   },
    //   {
    //     id: '17',
    //     category: 'Leashes & Collars',
    //     title: 'Elegant Collar',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 5,
    //     image: ['/images/products/collar1.jpg', '/images/products/collar2.jpg', '/images/products/collar3.jpg'],
    //   },
    //   {
    //     id: '18',
    //     category: 'Leashes & Collars',
    //     title: 'Black Harness',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 9,
    //     image: ['/images/products/harness1.jpg', '/images/products/harness2.jpg', '/images/products/harness3.jpg'],
    //   },
    //   {
    //     id: '19',
    //     category: 'Accessories',
    //     title: 'Double-Sided Wellness Glove',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 10,
    //     image: ['/images/products/accessories1.jpg', '/images/products/accessories2.jpg', '/images/products/accessories3.jpg'],
    //   },
    //   {
    //     id: '20',
    //     category: 'Accessories',
    //     title: 'Brush',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 11,
    //     image: ['/images/products/accessories4.jpg', '/images/products/accessories5.jpg', '/images/products/accessories6.jpg'],
    //   },
    //   {
    //     id: '21',
    //     category: 'Accessories',
    //     title: 'Blue Dog Towel',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 20,
    //     image: ['/images/products/accessories7.jpg', '/images/products/accessories8.jpg', '/images/products/accessories9.jpg'],
    //   },
    //   {
    //     id: '22',
    //     category: 'Vitamins & Supplements',
    //     title: 'Joint Supplement for Dogs',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 15,
    //     image: ['/images/products/vitamins1.jpg', '/images/products/vitamins2.jpg', '/images/products/vitamins3.jpg'],
    //   },
    //   {
    //     id: '23',
    //     category: 'Vitamins & Supplements',
    //     title: 'Forte Powder',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 19,
    //     image: ['/images/products/vitamins4.jpg', '/images/products/vitamins5.jpg', '/images/products/vitamins6.jpg'],
    //   },
    //   {
    //     id: '24',
    //     category: 'Vitamins & Supplements',
    //     title: 'Seaweed Meal',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 22,
    //     image: ['/images/products/vitamins7.jpg', '/images/products/vitamins8.jpg', '/images/products/vitamins9.jpg'],
    //   },
    //   {
    //     id: '25',
    //     category: 'Toys',
    //     title: 'Frisbee',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    //     price: 39,
    //     image: ['/images/products/toy10.jpg', '/images/products/toy11.jpg', '/images/products/toy12.jpg'],
    //   },
    ],
    loading: {
      active: false,
      error: false,
    },
    oneProduct: {},
    cart: [],
  },
  categories: {
    data: [
      {
        id: 1,
        name: 'Food & Treats',
        priceMin: 3,
        image: '/images/categories/food.jpg',
      },
      {
        id: 2,
        name: 'Toys',
        priceMin: 5,
        image: '/images/categories/toy.jpg',
      },
      {
        id: 3,
        name: 'Accessories',
        priceMin: 10,
        image: '/images/categories/accessories.jpg',
      },
      {
        id: 4,
        name: 'Health & Wellness',
        priceMin: 10,
        image: '/images/categories/health.jpg',
      },
      {
        id: 5,
        name: 'Leashes & Collars',
        priceMin: 5,
        image: '/images/categories/leashes.jpg',
      },
      {
        id: 6,
        name: 'Beds',
        priceMin: 20,
        image: '/images/categories/bed.jpg',
      },
      {
        id: 7,
        name: 'Bowls',
        priceMin: 3,
        image: '/images/categories/bowl.jpg',
      },
      {
        id: 8,
        name: 'Vitamins & Supplements',
        priceMin: 15,
        image: '/images/categories/vitamins.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
  },
};
