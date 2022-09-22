<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\EmailVerifyPostRequest;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Providers\RouteServiceProvider;
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
    public function store(RegisterRequest $request)
    {

        $validated = $request->validated();

        $user = User::create([
            'email' =>$validated['email'],
            'password' => Hash::make($validated['password']),
            'email_verification_code'=>mt_rand(100000, 999999),
        ]);

        event(new Registered($user));

        Auth::login($user);

        // This should goto the Email Verification Setup, based on the frontend design

        // return redirect('verification.notice');
        return redirect('choose-account');
    }

    public function email_verification()
    {
        if(Auth::user()->email_verified_at){ //TODO:this needs rework
            return redirect(RouteServiceProvider::HOME);
        }

        return Inertia::render('JoinPages/VerifyEmail');
    }

    public function verify(Request $request){
        $validated = $request->validate([
            'email_verification_code' => 'required|string',
        ]);

        if(!$validated['email_verification_code'] == Auth::user()->email_verification_code){
            return back()->with('error', "Invalid Verification Code");
        }

        Auth::user()->markEmailAsVerified();
        return redirect('choose-account');
    }

    public function verifyWithLink(EmailVerificationRequest $request){
        $request->fulfill();
        return redirect('choose-account');
    }


    public function store_account(Request $request)
    {

        $user = Auth::user();

        // TODO: Redirect to Name, if Role alreadt choosen.

        $validated = $request->validate([
            'account_type' => 'required|string',
        ]);

        // TODO: Proper validation needs to be done here.
        if(!in_array($validated['account_type'], ['student', 'parent', 'tutor'])){
            return back()->with('error', 'Invalid Account');
        }

        // $user->assignRole([$validated['account_type']]);
        // to avoid assiging multiple roles if back button was used
        $user->syncRoles([$validated['account_type']]);
        return redirect('choose-name');
    }

    public function store_date(Request $request)
    {
        $validated = $request->validate([
            'dob' => 'required|date',
        ]);

        Auth::user()->update(['birth_date' => $validated['dob']]);
        return redirect('choose-location');
    }

    public function store_name(Request $request)
    {
        $validated = $request->validate([
            'fName' => 'required|string',
            'lName' => 'required|string',
        ]);

        // Auth::user()->update($validated); // Can't use this because of naming convension.
        Auth::user()->update([
            'first_name' => $validated['fName'],
            'last_name' => $validated['lName'],
        ]);
        return redirect('choose-dob');
    }
    public function store_location(Request $request)
    {
        $validated = $request->validate([
            'location' => 'required',
        ]);

        return redirect('choose-phone');
    }
    public function store_number(Request $request)
    {
        $validated = $request->validate([
            'phone' => 'required|string',
        ]);

        Auth::user()->update($validated);
        return $this->gotoHome();
    }





    public function show_name()
    {
        if(!empty(Auth::user()->phone)){
            return $this->gotoHome();
        }
        return Inertia::render('JoinPages/JoinName');
    }

    public function account()
    {
        if(!empty(Auth::user()->phone)){
            return $this->gotoHome();
        }
        return Inertia::render('JoinPages/ChooseAccount');
    }

    public function chooseDob()
    {
        if(!empty(Auth::user()->phone)){
            return $this->gotoHome();
        }
        return Inertia::render('JoinPages/JoinDateOfBirth');
    }

    public function location()
    {
        if(!empty(Auth::user()->phone)){
            return $this->gotoHome();
        }
        return Inertia::render('JoinPages/JoinLocation');
    }

    public function phone_number()
    {
        if(!empty(Auth::user()->phone)){
            return $this->gotoHome();
        }
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

    public function forgot_password()
    {
        return Inertia::render('Auth/ForgotPassword');
    }
    public function confirm_password()
    {
        return Inertia::render('Auth/ConfirmPassword');
    }

}
