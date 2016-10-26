
export const allChores = state => (
  Object.keys(state.chores).map((id) => (state.chores[id])) || []
);
