# Authentication Default Roles

## Current Roles in App

1.) Customer
2.) Merchant

## Files Needs To Change , replace customer with other role name

- resources/assets/js/pages/Register.vue `ln 209`
- database/seeds/DummyUserSeeder.php `ln 26,ln 40`
- database/seeds/RolesAndPermissionsSeeder.php `ln 48,ln 54`
- api/Auth/RegisterController.php `ln 68`
