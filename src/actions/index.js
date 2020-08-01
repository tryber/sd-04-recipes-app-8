export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const changeVisibility = () => ({
  type: CHANGE_VISIBILITY,
});

export const saveUserEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});
