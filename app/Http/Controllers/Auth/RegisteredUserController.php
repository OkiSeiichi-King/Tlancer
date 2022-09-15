<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmailVerifyPostRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

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

    /**
     * Handle an incoming registration request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'email_verification_code'=>mt_rand(100000, 999999),
        ]);

        event(new Registered($user));

        Auth::login($user);

        //TODO: create email sending job queue

        // This should goto the Email Verification Setup, based on the frontend design

        return redirect('email-verification');
    }

    public function email_verification()
    {
        if(Auth::user()->email_verified_at){ //TODO:this needs rework
            return redirect('account');
        }

        return Inertia::render('JoinPages/VerifyEmail');
    }

    public function verify(EmailVerifyPostRequest $request){

        $request->validated();

        Auth::user()->markEmailAsVerified();

        return redirect('account');
    }


    public function store_account(Request $request)
    {
        dd($request->all());
    }
    public function store_date(Request $request)
    {
        dd($request->all());
    }
    public function store_name(Request $request)
    {
        dd($request->all());
    }
    public function store_location(Request $request)
    {
        dd($request->all());
    }
    public function store_number(Request $request)
    {
        dd($request->all());
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
}
