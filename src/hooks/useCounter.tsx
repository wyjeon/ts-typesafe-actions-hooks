import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/count';
import { RootState } from '../modules';

function useCounter() {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
}

export default useCounter;
