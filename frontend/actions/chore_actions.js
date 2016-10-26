export const REQUEST_CHORES = "REQUEST_CHORES";
export const RECEIVE_CHORES = "RECEIVE_CHORES";
export const CREATE_CHORE = "CREATE_CHORE";
export const RECEIVE_CHORE = "RECEIVE_CHORE";
export const DELETE_CHORE = "DELETE_CHORE";
export const UPDATE_CHORE = "UPDATE_CHORE";
export const REMOVE_CHORE = "REMOVE_CHORE";


export const requestChores = () => ({
  type: REQUEST_CHORES
});
export const receiveChores = (chores) => ({
  type: RECEIVE_CHORES,
  chores
});

export const receiveChore = (chore) => ({
  type: RECEIVE_CHORE,
  chore
});

export const createChore = (chore) => ({
  type: CREATE_CHORE,
  chore
});

export const updateChore = (chore) => ({
  type: UPDATE_CHORE,
  chore
});

export const deleteChore = (chore) => ({
  type: DELETE_CHORE,
  chore
});

export const removeChore = (chore) => ({
  type: REMOVE_CHORE,
  chore
});
