<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TutorHomePageController extends Controller
{
    public function index(){
        $courses = Course::all();
        return inertia('ProfilePage/TutorPage/TutorPage', ['courses' => $courses]);
    }

    public function courses(){
        $courses = Course::all();
        return inertia('ProfilePage/TutorPage/MyCourse', ['courses' => $courses]);
    }

    public function create(){
        return inertia('ProfilePage/TutorPage/NewCourse');
    }
}
