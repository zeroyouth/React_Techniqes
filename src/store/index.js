// 1.전체 리덕스 스토어 만들기
import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({//2.스토어 불러내기(객체임)
  reducer: { //3.루트 리듀서 여기서 설정 reduces(x)
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store; //4. 스토어 내보내기 

//5. 루트 애플리케이션 구성 요소 렌더링하는 index.js로 가기