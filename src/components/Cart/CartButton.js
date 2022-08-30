import { useDispatch, useSelector } from "react-redux"; //4. useSelecter로 데이터 조각을 선택하여 상태에서 데이터 읽을 수 있음.
import { uiActions } from "../../store/ui-slice"; //1. uiActions 불러오기
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch(); //2. 리덕스에서 제공하는 디스패치 함수에 접근할 수 있다. 
  const cartQuantity = useSelector(state => state.cart.totalQuantity) // 총 수량
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); //3. 함수로 실행해야한다.
  };


  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
