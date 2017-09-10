<?php

/* Vue Front End Wildcard Catcher */
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

/* Avoid Adding Routes Below This Line */