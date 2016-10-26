export const fetchChores = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/chores',
    success,
    error
  });
};

export const createChore = (chore, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/chores',
    data: chore,
    success,
    error
  });
};

export const updateChore = (chore, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: 'api/chores',
    data: chore,
    success,
    error
  });
};

export const deleteChore = (chore, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/chores',
    data: chore,
    success,
    error
  });
};
