<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function gotoHome(){

        $user = Auth::user();

        if(empty($user->roles)){
            return redirect('choose-account');
        }else if(empty($user->first_name)){
            return redirect('choose-name');
        }else if(empty($user->birth_date)){
            return redirect('choose-dob');
        }else if(empty($user->phone)){
            return redirect('choose-phone');
        }
        // else if(empty($user->region)){ // TODO Skipping region/location
        //     return redirect('choose-name');
        // }


        // All info set, User can goto page!
        if($user->hasRole('tutor')){
          return redirect('tutor-home');
        }elseif($user->hasRole('parent')){
           return redirect('parent-home');
        }else{
           return redirect('student-home');
        }
    }
}
