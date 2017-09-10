## Preset
- none
- example
- fresh

## Auth Command
We dont need to add passportserviceprovider in our auto package discovery
But if the user intend to use the template which uses passport then they can use this command

This will create Routes for our Passport Api Login
- routes/api.php

## Wildcard Vue Route
Overwrite web.php using a command

## Public Assets
Publish View
resources/views/vendor/vuetified
- app.blade.php
- initial_state.blade.php

Publish Migrations
- social_accounts_table 
- update_user_id_oauth_clients_table
- update_users_table

Publish Seeds
- DatabaseSeeder (overwrite)
- InitialDummyData (for example)

Publish Config
- echo.php
- sluggable.php

Publish Example Events
- GetAuthUser.php
- NewMessage.php
- UserCreated.php

Publish Example Channels
- route/channels.php


Publish Model Or Try to Use Trait To avoid publishing User Model

Publish Our Social Accounts Model
Or use a Command to add it in make:auth --social
Which Would Add SocialAccountServiceProvider.php


