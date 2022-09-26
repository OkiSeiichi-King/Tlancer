<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function classType(){
        return $this->belongsTo(ClassType::class, 'class_type_id');
    }

    public function subject(){
        return $this->belongsTo(Subject::class, 'user_id');
    }

    public function currency(){
        return $this->belongsTo(Currency::class, 'user_id');
    }

    public function courseStatus(){
        return $this->belongsTo(CourseStatus::class, 'course_status_id');
    }

    public function syllabus(){
        return $this->belongsTo(File::class, 'sylabus_id');
    }

    public function preview(){
        return $this->belongsTo(File::class, 'course_preview_id');
    }
}
