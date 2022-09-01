import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() { //useSelector 부분 이해 아직 못했음 😅 값 추출부분
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  // 리덕스 상태를 자동으로 받는 함수를 전달해야한다.
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://react-data-a6373-default-rtdde.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
