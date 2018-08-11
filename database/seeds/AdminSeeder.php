<?php
use App\Models\Link;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'id'       => 1,
            'name'     => config('admin.name'),
            'email'    => config('admin.email'),
            'password' => config('admin.password'),
            'username' => config('admin.username')
        ]);

        $user->assignRole('admin');
        $link                 = new Link();
        $link->id             = 1;
        $link->link           = $user->username;
        $link->active         = true;
        $link->date_activated = \Carbon\Carbon::now();

        $user->referralLink()->save($link);
        $link->save();
        $link->sp_user_id = null;
        $link->save();
        $profile = factory(Profile::class, 1)->create()->first();
        $user->profile()->save($profile);
        $user->save();
    }
}
