<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->string('provider');
            $table->unsignedBigInteger('provider_user_id');
            $table->unique(['user_id', 'provider']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['provider_user_id', 'provider']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_accounts');
    }
}
