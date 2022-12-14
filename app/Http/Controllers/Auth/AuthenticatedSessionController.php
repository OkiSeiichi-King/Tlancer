<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\DailyQuote;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        //dd(App()->getLocale());
        return Inertia::render('Components/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'quote' => DailyQuote::query()
                ->where('published', true)
                ->orderByDesc('id')
                ->first()
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param \App\Http\Requests\Auth\LoginRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        //TODO: must create logics to redirect student, tutor and parent in their pages
        //return redirect()->intended(RouteServiceProvider::HOME);

        // return redirect()->intended(RouteServiceProvider::TutorHome);
        return $this->gotoHome();
    }

    /**
     * Destroy an authenticated session.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
