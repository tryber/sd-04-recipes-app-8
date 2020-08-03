export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CHANGE_PAGE_TYPE = 'CHANGE_PAGE_TYPE';

export const changeVisibility = () => ({
  type: CHANGE_VISIBILITY,
});

export const saveUserEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const changePageType = (payload) => ({
  type: CHANGE_PAGE_TYPE,
  payload,
});
