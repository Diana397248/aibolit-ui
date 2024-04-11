import {reactive} from "vue";

export const store = reactive(
    {
        "isAuth": localStorage.getItem("token") !== null,
        "isAdmin": localStorage.getItem("user_role") === "ADMIN",
        "userId": localStorage.getItem("user_id"),
        "isDebug": false,
    }
)

export const clearStore = () => {
    store.isAuth = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_id");
}