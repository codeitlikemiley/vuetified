import Vue from "vue";
import route from "ziggy";
import { Ziggy } from "../ziggy";

Vue.mixin({
    methods: {
        route: (name, params, absolute, config = Ziggy) =>
            route(name, params, absolute, config)
    }
});
