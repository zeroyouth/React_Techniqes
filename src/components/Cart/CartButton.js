import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice"; //1. uiActions 불러오기
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch(); //2. 리덕스에서 제공하는 디스패치 함수에 접근할 수 있다. 
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); //3. 함수로 실행해야한다.
  };


  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
