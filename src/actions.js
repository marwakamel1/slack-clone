export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const DELETE_AUTHED_USER = "DELETE_AUTHED_USER";

export function setUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_AUTHED_USER,
    id,
  };
}
