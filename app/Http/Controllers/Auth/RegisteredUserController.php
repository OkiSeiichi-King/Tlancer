<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
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
    public function store(RegisterRequest $request)
    {


        $validated = $request->validate();
        $name = explode(' ', $validated['name']);
        $user = User::create([
            'name' => $validated['name'],
            'first_name' => $name[0],
            'last_name' => $name[1] ?? '',
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);


         event(new Registered($user));

        // This should goto the Email Verification Setup, based on the frontend design
        return redirect('email-verification');
        // return redirect(RouteServiceProvider::HOME);

    }
}
