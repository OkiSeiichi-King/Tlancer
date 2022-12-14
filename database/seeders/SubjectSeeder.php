<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subjects = ['Mathematics', 'English', 'Science'];
        foreach($subjects as $sub){
            DB::table('subjects')->insert(['subject_name_en' => $sub]);
        }
    }
}
