<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUserIdInPassportTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->unsignedInteger('user_id')->unique()->nullable()->change();
        });
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->unsignedInteger('user_id')->unique()->nullable()->change();
        });
        Schema::table('oauth_auth_codes', function (Blueprint $table) {
            $table->unsignedInteger('user_id')->unique()->nullable()->change();
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oauth_clients', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
        Schema::table('oauth_access_tokens', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
        Schema::table('oauth_auth_codes', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
    }
}
