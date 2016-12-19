const initialState = [];
const funcs = {};

funcs.AddUser = (state, data) => (
  [...state, data]
);

funcs.RemoveUser = (state, data) => (
  state.filter(u => u.username !== data)
);

export default function user(state = initialState, action) {
  if (funcs[action.type]) {
    return funcs[action.type](state, action.data);
  }
  return state;
}
