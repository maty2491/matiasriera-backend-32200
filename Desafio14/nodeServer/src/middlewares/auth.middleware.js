/* const authMiddleware = (req, res, next) => {
    const user = req.session.user;
  
    if (user) {
      return next();
    }
  
    res.redirect("/login");
  };
  
  const checkNotLogged = (req, res, next) => {
    const user = req.session.user;
  
    if (!user) {
      return next();
    }
  
    res.redirect("/welcome");
  }; */

  const invalidUrl = (req, res, next) => {
    res.render("routing-error");
  };
  export const authMiddlewares = { invalidUrl };
  //export const authMiddlewares = { checkNotLogged, authMiddleware };