import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) { //장바구니 아이템 추가
      const newItem = action.payload; //항목을 추출해야한다. 
      const existingItem = state.items.find((item) => item.id === newItem.id); //아이템이 이미 존재하는지 확인하고 변수저장
      state.totalQuantity++;
      if (!existingItem) { //만약 존재하지 않는다면 배열에 push(불변성 문제 -> 리덕스 툴킷에서는 사용가능)
        state.items.push({ //여기는 내가 관리하는 곳이기 때문에 이름 설정 마음대로 해도됨.
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price * 1,
          name: newItem.title
        });
      } else { //아이템이 존재하는 경우, 기존 항목을 업데이트 !(수량이랑 가격만 변경하면 됨!)
        // existingItem.quantity = existingItem.quantity + 1
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {//장바구니에서 아이템 제거 
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) { //장바구니에 수량이 1일 경우 : 배열에서 없애줘야함( 아직 이해가 안간다. 😂)
        state.items = state.items.filter(item => item.id !== id) //제거하려는 항목 하나 필터링하기 
      } else { //수량이 1이상인 경우에는 수량-1
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-data-a6373-default-rtdde.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data successfully!',
      })
      );
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
      );
    }
  };
};


//디스패치 해야해서 작업 내보내기 
export const cartActions = cartSlice.actions;

export default cartSlice;
