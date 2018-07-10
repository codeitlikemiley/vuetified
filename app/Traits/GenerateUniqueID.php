<?php

namespace App\Traits;

use Keygen\Keygen;

trait GenerateUniqueID
{
    /**
     * @return mixed
     */
    public static function generateUniqueID()
    {
        $id = self::generateID();

        // Ensure ID does not exist

        // Generate new one if ID already exists
        while (self::whereId($id)->count() > 0) {
            $id = self::generateID();
        }

        return $id;
    }

    /**
     * @param $id
     */
    public function setIdAttribute($id)
    {
        if (static::whereId($id)->count() > 0) {
            throw new \Exception('Id already exists.');
        }

        $this->attributes['id'] = $id;
    }

    private static function generateID()
    {
        return Keygen::numeric(14)->prefix(mt_rand(1, 9))->generate(true);
    }
}
