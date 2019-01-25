<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->passportInstall();
        $this->call(RolesAndPermissionsSeeder::class);
        $this->call(AdminSeeder::class);

        if (App::environment(['local', 'staging'])) {
            // This Seeder Would Not Be Run on Production
            $this->call(DummyUserSeeder::class);
        }
    }

    private function passportInstall()
    {
        \Artisan::call('passport:keys', [
            '--force' => true,
            '-n'      => true
        ]);
        \Artisan::call('passport:client', [
            '--password' => true,
            '-n'         => true
        ]);
    }
}
