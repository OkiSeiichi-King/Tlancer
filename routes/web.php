<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ParentHomePageController;
use App\Http\Controllers\StudentHomePageController;
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
    Route::get('parent-home', [ParentHomePageController::class, 'index'])->name('parent-home');
    Route::get('student-home', [StudentHomePageController::class, 'index'])->name('student-home');

    Route::get('choose-account', [RegisteredUserController::class, 'account'])->name('choose-account');
    Route::post('store-account', [RegisteredUserController::class, 'store_account'])->name('store-account');

    Route::get('choose-name', [RegisteredUserController::class, 'show_name'])->name('choose-name');
    Route::post('store-name', [RegisteredUserController::class, 'store_name'])->name('store-name');

    Route::get('choose-dob', [RegisteredUserController::class, 'chooseDob'])->name('choose-dob');
    Route::post('store-date', [RegisteredUserController::class, 'store_date'])->name('store-date');

    Route::get('choose-location', [RegisteredUserController::class, 'location'])->name('choose-location');
    Route::post('store-location', [RegisteredUserController::class, 'store_location'])->name('store-location');

    Route::get('choose-phone', [RegisteredUserController::class, 'phone_number'])->name('choose-phone');
    Route::post('store-number', [RegisteredUserController::class, 'store_number'])->name('store-number');
});

/**
 * Auth Middleware
 */

 Route::middleware('auth')->group(function (){
    Route::get('email/verify/{id}/{hash}', [RegisteredUserController::class, 'verifyWithLink'])->middleware('signed')->name('verification.verify');
    Route::post('verify', [RegisteredUserController::class, 'verify'])->name('verify');

    Route::get('email-verification', [RegisteredUserController::class, 'email_verification'])->name('verification.notice');
    Route::post('/email/verification-notification', [RegisteredUserController::class, 'resend_email'])->middleware('throttle:6,1')->name('verification.send');
    Route::get('/email/verification-notification', [RegisteredUserController::class, 'resend_email'])->middleware('throttle:6,1')->name('verification.send2');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout'); // Don't need to be verified to logout.
 });


Route::middleware('guest')->group(function () {

    Route::get('join', [RegisteredUserController::class, 'create'])->name('join');
    Route::post('register', [RegisteredUserController::class, 'store'])->name('register');


    Route::get('forgot-password', [RegisteredUserController::class, 'forgot_password'])->name('forgot-password');
    Route::get('confirm-password', [RegisteredUserController::class, 'confirm_password'])->name('confirm-password');


    Route::get('email', [RegisteredUserController::class, 'email'])
        ->name('email');

    Route::get('password', [RegisteredUserController::class, 'password'])
        ->name('password');



    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login'); //from auth.php
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});




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



/**
 * Requested Front-end Routes
 */


Route::get('tutor/my_courses', [TutorHomePageController::class, 'courses'])->name('tutor-courses');
Route::get('tutor/new_course', [TutorHomePageController::class, 'create'])->name('tutor-new-course');
