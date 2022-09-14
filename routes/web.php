<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TutorHomePageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomePage/Home', [
        //'canLogin' => Route::has('login'),
        //'canRegister' => Route::has('register'),
        //'laravelVersion' => Application::VERSION,
        //'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

// Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('welcome');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('tutor-home', [TutorHomePageController::class, 'index'])->name('tutor-home');


    Route::get('account', [RegisteredUserController::class, 'account'])->name('account');
});

/**
 * Auth Middleware
 */

 Route::middleware('auth')->group(function (){
    Route::get('email-verification', [RegisteredUserController::class, 'email_verification'])->name('verification.notice');

    Route::get('email/verify/{id}/{hash}', [RegisteredUserController::class, 'verifyWithLink'])->middleware('signed')->name('verification.verify');
    Route::post('verify', [RegisteredUserController::class, 'verify'])->name('verify');
 });


Route::middleware('guest')->group(function () {


    Route::get('join', [RegisteredUserController::class, 'create'])->name('join');

    Route::post('register', [RegisteredUserController::class, 'store'])->name('register');




    Route::get('email', [RegisteredUserController::class, 'email'])
        ->name('email');
    Route::get('name', [RegisteredUserController::class, 'show_name'])
        ->name('name');
    Route::get('date-of-birth', [RegisteredUserController::class, 'birth'])
        ->name('date-of-birth');
    Route::get('location', [RegisteredUserController::class, 'location'])
        ->name('location');
    Route::get('phone-number', [RegisteredUserController::class, 'phone_number'])
        ->name('phone-number');

    Route::get('password', [RegisteredUserController::class, 'password'])
        ->name('password');



    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login'); //from auth.php
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});


Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

Route::get('language/{language}', function ($language) {
    Session()->put('locale', $language);

    return redirect()->back();
})->name('language');

/*require __DIR__.'/auth.php';*/
Inertia::share('appName', config('app.name'));


/**
 * Test Routes - TO be removed
 */

Route::get('test-mail/{email}', [HomeController::class, 'testMail']);
