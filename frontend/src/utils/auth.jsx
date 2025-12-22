const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
}

export function signup(user) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  if (users.find((u) => u.email === user.email)) {
    throw new Error("User already exists");
  }

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function isLoggedIn() {
  return !!getCurrentUser();
}
