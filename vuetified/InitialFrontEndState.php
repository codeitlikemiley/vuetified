<?php

namespace Vuetified;

use Vuetified\Contracts\InitialFrontendState as Contract;
use App\User;

class InitialFrontendState implements Contract
{

    public function forUser($user)
    {
        return $this->getData();
    }

    private function getData() {
        
        $data = array_merge(array(),['user' => auth()->user()]);
        // Merge Some More Data If Needed
        return $data;
    }
}
