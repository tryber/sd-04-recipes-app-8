export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';

export const changeVisibility = () => ({
  type: CHANGE_VISIBILITY,
});

export const saveUserEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const changeLocation = (payload) => ({
  type: CHANGE_LOCATION,
  payload,
});
