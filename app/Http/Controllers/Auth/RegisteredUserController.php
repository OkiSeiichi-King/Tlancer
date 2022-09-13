<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function show_name()
    {
        return Inertia::render('JoinPages/JoinName');
    }
    public function account()
    {
        return Inertia::render('JoinPages/ChooseAccount');
    }

    public function birth()
    {
        return Inertia::render('JoinPages/JoinDateOfBirth');
    }
    public function email_verification()
    {
        return Inertia::render('JoinPages/VerifyEmail');
    }

    public function location()
    {
        return Inertia::render('JoinPages/JoinLocation');
    }

    public function phone_number()
    {
        return Inertia::render('JoinPages/JoinPhoneNumber');
    }

    public function password()
    {
        return Inertia::render('JoinPages/JoinPassword');
    }

    public function email()
    {
        return Inertia::render('JoinPages/JoinEmail');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        // dd('this route is hit');
        dd($request->all());

        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        // ]);

        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        // event(new Registered($user));

        // Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);
    }
}
