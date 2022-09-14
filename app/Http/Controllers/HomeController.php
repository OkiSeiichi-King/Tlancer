<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index(){
        return inertia('HomePage/Home');
    }

    public function testMail($email){
        $mail = new TestMail();
        Mail::to($email)->send($mail);
        return $mail;
    }
}
