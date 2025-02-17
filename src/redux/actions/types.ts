export const SET_USER = "SET_USER";

interface PayloadType {
  uid: string;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: PayloadType;
}

export type UserActionTypes = SetUserAction;
