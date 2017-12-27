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
    public static $version = '1.0.0';
}
