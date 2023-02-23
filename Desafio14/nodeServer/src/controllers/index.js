/* import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const users = [""];

const serverLogin = (req, res) => {
  res.sendFile(join(__dirname, "../views/login.html"));
};

const login = (req, res) => {
  const { username } = req.body;
  
  if (!users.includes(username)) {
    return res.send("Invalid credentials");
  }

  req.session.user = username;

  res.redirect("/welcome");
};

const serverResgister = (req, res) => {
  res.sendFile(join(__dirname, "../views/register.html"));
};

const register = (req, res) => {
  const { username } = req.body;

  if (users.includes(username)) {
    return res.send("Username already in use");
  }

  users.push(username);

  res.redirect("/login");
};

const logout = (req, res) => {
  const username = req.session.user;
  req.session.destroy();

  res.render("logout", { username });
};

const serverWelcome = (req, res) => {
  const username = req.session.user;

  res.render("welcome", { username });
};

export const authController = {
  serverLogin,
  login,
  serverResgister,
  register,
  logout,
  serverWelcome,
}; */

const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;   

    return res.render("welcome", {
      username: user.username,
      email: user.email,
    });
  }
  res.render("login");
};

const getRegister = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    return res.render("welcome", {
      username: user.username,
      email: user.email,
    });
  }
  res.render("register");
};

const getLoginFailiure = (req, res) => {
  res.render("login-error");
};

const getRegisterFailiure = (req, res) => {
  res.render("signup-error");
};

const logOut = (req, res) => {
  
  const username = req.user.username;
  req.logout(() => {
    

    return res.render("logout", { username });
  });
};



export const authController = {
  getLogin,
  getRegister,
  getLoginFailiure,
  getRegisterFailiure,
  logOut,
};