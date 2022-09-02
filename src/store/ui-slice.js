import { createSlice } from '@reduxjs/toolkit'; //1. createSlice 불러오기 

const uiSlice = createSlice({ //2.가져오기 
  name: 'ul',
  initialState: { cartIsVisible: false, notification: null }, //장바구니 표시혀부 제어
  reducers: { //3. 리듀서 키 작성, 작업을 나타내는 메소드 정리
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; //이전상태 반대로 설정
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    }
  }
});

export const uiActions = uiSlice.actions //4.액션 내보내기

export default uiSlice; //5.uiSlice도 내보내기
//6. index.js 파일로 가기

