<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'contact_no', 'address_1', 'address_2', 'city', 'country', 'zip',
        'state'
    ];

    /**
     * @var string
     */
    protected $table = 'profiles';

    /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
