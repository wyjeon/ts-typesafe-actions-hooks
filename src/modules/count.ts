import { ActionType, createAction, createReducer } from 'typesafe-actions';

// 액션 타입
const INCREMENT = 'couter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수
export const increase = createAction(INCREMENT)();
export const decrease = createAction(DECREMENT)();

// 액션 객체들에 대한 type
const actions = { increase, decrease };
type CounterAction = ActionType<typeof actions>;

// 상태의 타입
type CounterState = {
  number: number;
};

// 초기상태
const initialState: CounterState = {
  number: 0,
};

// 리듀서
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREMENT]: state => ({ number: state.number + 1 }),
  [DECREMENT]: state => ({ number: state.number - 1 }),
});

export default counter;
