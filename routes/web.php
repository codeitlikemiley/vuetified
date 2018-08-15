<?php

// Enable Horizon for Queueing Mail!
Horizon::auth(function ($request) {
    // View Horizon Dashboard
    return true;
});
// Sample Route For Sending Mail To All Users!

Route::get('massMailExample', 'MassMailController@massMailExample')->name('massMailExample');
Route::get('viewMailTemplate', 'MassMailController@viewMailTemplate')->name('viewMailTemplate');

// Referral Link
Route::domain('{referrallink}.'.config('app.domain'))->group(function () {
    Route::get('/{vue?}', 'DomainController@app')->where('vue', '[\/\w\.-]*')->name('referral.page');
});
// Main Page
Route::get('/{vue?}', 'DomainController@app')->where('vue', '[\/\w\.-]*')->name('home.page');
