// src/utils/session.js
export const saveSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getSession = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const logout = () => {
    localStorage.removeItem("user");
};