<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia('Components/Login');
    }

    public function store(request $request){
        dd("authentication request from frontend".$request);
    }
}
