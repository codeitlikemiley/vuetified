<?php

namespace App\Models;

use Spatie\Permission\Models\Permission as Model;
use Spatie\Permission\Contracts\Permission as Contract;

class Permission extends Model implements Contract
{
    /**
     * @var string
     */
    protected $table = 'permissions';
}
