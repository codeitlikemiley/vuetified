const Ziggy = {"url":"http:\/\/vuetified.test","port":null,"defaults":{},"routes":{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"]},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"]},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"]},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"]},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"]},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"laravel-websockets.statistics":{"uri":"api\/{appId}\/statistics","methods":["GET","HEAD"]},"laravel-websockets.auth":{"uri":"auth","methods":["POST"]},"laravel-websockets.event":{"uri":"event","methods":["POST"]},"impersonate":{"uri":"impersonate\/take\/{id}\/{guardName?}","methods":["GET","HEAD"]},"impersonate.leave":{"uri":"impersonate\/leave","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"login.attempt":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"logout.attempt":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
