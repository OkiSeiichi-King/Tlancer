<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i <= 10; $i++){
            DB::table('courses')->insert([
                'title' => fake()->sentence(),
                'description' => fake()->text(),
                'max_student' => rand(10, 200),
                'course_duration_number' => rand(1, 10),
                'price' => 100.34,
                'start_date' => now(),
                'user_id' => 1,
                'class_type_id' => 1,
                'course_status_id' => 1,
                'currency_id' => 1,
            ]);
        }
    }
}
