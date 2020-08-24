import * as actionType from '../action/actionType';

import IpadImg from '../../asset/img/ipad.jpg';
import s9Img from '../../asset/img/s9plus.jpg';
import d700Img from '../../asset/img/d700.jpg';
import dellu27Img from '../../asset/img/U2720q.jpg';
import activeWatchImg from '../../asset/img/active-watch2.jpg';

const initilize = {
  products: [
    {
      id: 1,
      title: 'ipad pro 2020',
      name: 'IPAD',
      image: IpadImg,
      rating: 5,
      price: 900,
    },
    {
      id: 2,
      title: 'Samsung s9 plus 2017 duak camera 128GB rom 6GB ram ',
      name: 'S9 plus',
      image: s9Img,
      rating: 4,
      price: 500,
    },
    {
      id: 3,
      title:
        'Galaxy Watch Active2 / Stainless Steel / 40mm [Genuine Galaxy Smart Watch Domestic Product]',
      name: 'Active 2',
      image: activeWatchImg,
      rating: 4,
      price: 350,
    },
    {
      id: 4,
      title: 'Dell U2720Q ips 27 inch monitor',
      name: 'U2720Q',
      image: dellu27Img,
      rating: 4,
      price: 450,
    },
    {
      id: 5,
      title: 'Nikon D700 DSLR camera with kit lense',
      name: 'D700',
      image: d700Img,
      rating: 4,
      price: 700,
    },
  ],
};

const reducer = (state = initilize, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS:
      return state.products;

    case actionType.GET_PRODUCT_BY_ID:
      const products = [...state.products];
      let basketItemsInfo = [];
      for (let product of action.productIds) {
        const productsInfo = products.filter(
          (products) => products.id === product
        );
        basketItemsInfo.push(productsInfo);
      }

      return basketItemsInfo;
    default:
      return state;
  }
};

export default reducer;
