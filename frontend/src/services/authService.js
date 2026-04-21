const users = [
    { id: 1, email: "admin@test.com", password: "123", role: "admin" },
    { id: 2, email: "user@test.com", password: "123", role: "user" }
];

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(
                u => u.email === email && u.password === password
            );

            if (user) {
                resolve({ ...user, token: "fake-token" });
            } else {
                reject("Credenciales incorrectas");
            }
        }, 800);
    });
};