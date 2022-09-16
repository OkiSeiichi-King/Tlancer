<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentHomePageController extends Controller
{
    public function index(){
        return inertia('ProfilePage/StudentPage/StudentPage');
    }
}
