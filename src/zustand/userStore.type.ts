import { UserData } from "src/type/userData.ts";

export interface UserState {
    user: UserData;
}

export interface UserAction {
    setUser: (user: UserData) => void;
}

export interface UserStore extends UserState, UserAction {}
