import auth from "Routes/auth";
import home from "Routes/home";
import profile from "Routes/profile";
import errors from "Routes/errors";
import users from "Routes/users";

let routeFiles = [];
/* Multi Route Files */
const routes = routeFiles.concat(
  auth,
  home,
  profile,
  errors,
  users
  /* add here Other Routes File */
);
export default routes;
