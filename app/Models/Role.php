<?php

namespace App\Models;

use Spatie\Permission\Models\Role as Model;
use Spatie\Permission\Contracts\Role as Contract;

class Role extends Model implements Contract
{
    protected $table = 'roles';
}
