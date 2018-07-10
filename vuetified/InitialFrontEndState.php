<?php

namespace Vuetified;

use Vuetified\Contracts\InitialFrontendState as Contract;

class InitialFrontendState implements Contract
{
    /**
     * @param $user
     * @return mixed
     */
    public function forUser($user)
    {
        return $this->getData();
    }

    /**
     * @return mixed
     */
    private function getData()
    {
        $data = array_merge([], ['user' => auth()->user()]);
        // Merge Some More Data If Needed
        return $data;
    }
}
