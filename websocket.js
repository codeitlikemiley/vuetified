require('dotenv').config()

const env = process.env
const EchoServer = require('laravel-echo-server')

const options = {
    authHost: env.APP_URL,
    devMode: env.APP_DEBUG,
    authEndpoint: '/broadcasting/auth',
    clients: {
        appId: env.ECHO_CLIENT_ID,
        key: env.ECHO_CLIENT_KEY
    },
    database: 'redis',
    databaseConfig: {
        redis: {},
        sqlite: {
            databasePath: '/database/laravel-echo-server.sqlite'
        }
    },
    host: env.ECHO_DOMAIN,
    port: 6001,
    protocol: 'http',
    socketio: {
        wsEngine: 'uws'
    }
}

EchoServer.run(options)
