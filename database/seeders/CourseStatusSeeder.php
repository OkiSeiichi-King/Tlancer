<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mocks = ['Open', 'Closed',];
        foreach($mocks as $mock){
            DB::table('course_statuses')->insert(['name_en' => $mock]);
        }
    }
}
