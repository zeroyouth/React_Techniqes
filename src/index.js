import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Provider 가져오기
import './index.css';
import App from './App';
import store from './store/index' // store 가져오기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //store props로 전달
  <Provider store={store}>
    <App />
  </Provider>
);

//전체 컴포넌트에 리덕스 스토어를 제공하는 방법, 이제 리덕스를 활용할 수 있다.!😀
