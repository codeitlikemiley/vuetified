<?php
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Link;
use App\Models\Profile;

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
            'id' => 1,
            'name' => config('admin.name'),
            'email' => config('admin.email'),
            'password' => config('admin.password'),
            'username' => config('admin.username')
        ]);
        
        $user->assignRole('admin');
        $link = new Link();
        $link->id = 1;
        $link->link = $user->username;
        $link->active = true;
        $link->date_activated = \Carbon\Carbon::now();

        $user->referralLink()->save($link);
        $link->save();
        $link->sp_user_id = null;
        $link->save();
        $profile = Profile::create([
            'first_name' => 'Super',
            'last_name'  => 'Admin',
        ]);
        $user->profile()->save($profile);
        $user->save();
        
    }
}