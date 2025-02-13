import { createStore } from "@stencil/store";

const { state, onChange,dispose } = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
});

onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

export default state;
export {dispose};