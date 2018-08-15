import account from "Routes/account";
import auth from "Routes/auth";
import errors from "Routes/errors";
import home from "Routes/home";
import users from "Routes/users";

let routeFiles = [];
/* Multi Route Files */
const routes = routeFiles.concat(
  account,
  auth,
  errors,
  home,
  users
  /* add here Other Routes File */
);
export default routes;
