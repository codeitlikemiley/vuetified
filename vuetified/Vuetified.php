<?php

namespace Vuetified;

class Vuetified
{
    use Configuration\ProvidesScriptVariables,
        Configuration\CallsInteractions,
        Configuration\ManageModelOptions;

    /**
     * The Vuetified version.
     */
    public static $version = '2.0.0';
}
