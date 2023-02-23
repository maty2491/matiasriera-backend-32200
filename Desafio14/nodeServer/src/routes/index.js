import { Router } from "express";
import { authController } from "../controllers/index.js";
// import { authMiddlewares } from "../middlewares/auth.middleware.js";
import passport from "passport";
import { randomController } from "../controllers/random.controller.js";

const router = Router();

router
  .route("/login")
  .get(authController.getLogin)
  .post(passport.authenticate("login", { failureRedirect: "/fail-login" }), authController.getLogin)
//.get(authMiddlewares.checkNotLogged, authController.serverLogin)
//.post(authMiddlewares.checkNotLogged, authController.login);
router
  .route("/register")
  .get(authController.getRegister)
  .post(passport.authenticate("register", { failureRedirect: "/fail-register" }), authController.getLogin)
// .get(authMiddlewares.checkNotLogged, authController.serverResgister)
// .post(authMiddlewares.checkNotLogged, authController.register);

// ruta de logout
router.get("/logout", authController.logOut);
//fails
router.get("/fail-login", authController.getLoginFailiure);
router.get("/fail-register", authController.getRegisterFailiure);

router.get('/api/randoms', randomController.getRandom)
router.get('/info', randomController.getInfo)

//router
//  .route("/logout")
//  .get(authMiddlewares.authMiddleware, authController.logout);
//router
//  .route("/welcome")
//  .get(authMiddlewares.authMiddleware, authController.serverWelcome);

export default router;