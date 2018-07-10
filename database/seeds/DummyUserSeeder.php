<?php

use App\Models\Link;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class DummyUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Freemium User */
        factory(User::class, 1)->create()->each(function ($user) {
            $sponsor = User::first();
            $user->referralLink()->save(factory(Link::class)->make());
            $currentLink             = $user->referralLink;
            $currentLink->sp_user_id = optional($sponsor)->id;
            $currentLink->sp_link_id = optional($sponsor->referralLink)->id;
            $currentLink->save();
            $user->sp_id = optional($sponsor)->id;
            $user->assignRole('freemium');
            $user->save();
            $profile = factory(Profile::class, 1)->create()->first();
            $user->profile()->save($profile);
        });
        /* Premium User */
        factory(User::class, 1)->create()->each(function ($user) {
            $sponsor = User::first();
            $user->referralLink()->save(factory(Link::class)->make());
            $currentLink             = $user->referralLink;
            $currentLink->sp_user_id = optional($sponsor)->id;
            $currentLink->sp_link_id = optional($sponsor->referralLink)->id;
            $currentLink->save();
            $user->sp_id = optional($sponsor)->id;
            $user->assignRole('premium');
            $user->save();
            $profile = factory(Profile::class, 1)->create()->first();
            $user->profile()->save($profile);
        });

    }
}
