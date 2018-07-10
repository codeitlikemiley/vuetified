import "./forms";
import "./errors";
import http from "./http";

// Add methods to App Object for HTTP Request
_.extend(App, http);

// All Fields Declared Here When Initiated Will Be Reactive
App.forms = {
  passwordResetForm: {
    email: "",
    password: "",
    password_confirmation: "",
    token: ""
  },
  resetForm: {
    username: ""
  },
  logoutForm: {
    submit: true
  },
  loginForm: {
    username: "",
    email: "",
    password: "",
    remember: false
  },
  registerForm: {
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
    sponsor_id: ""
  },
  toggleForm: {
    toggle: false
  },
  accountForm: {
    email: null,
    username: null,
    old_password: null,
    password: null,
    password_confirmation: null
  },
  profileForm: {
    first_name: null,
    last_name: null,
    contact_no: null,
    address_1: null,
    address_2: null,
    city: null,
    country: null,
    zip_code: null,
    state_province: null
  },
  usersForm: {},
  linkForm: {
    link: "",
    link_id: "",
    user_id: ""
  },
  rolesForm: {
    roles: []
  },
  permissionsForm: {
    permissions: []
  },
  contactForm: {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  // Add Other Form Object Here
};
