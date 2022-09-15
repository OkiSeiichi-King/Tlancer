<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParentHomePageController extends Controller
{
    public function index(){
        return inertia('ProfilePage/ParentPage/ParentPage');
    }
}
