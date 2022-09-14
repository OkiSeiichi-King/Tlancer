<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TutorHomePageController extends Controller
{
    public function index(){
        return inertia('ProfilePage/TutorPage/TutorPage');
    }

    public function courses(){
        return inertia('ProfilePage/TutorPage/MyCourse');
    }

    public function create(){
        return inertia('ProfilePage/TutorPage/NewCourse');
    }
}
