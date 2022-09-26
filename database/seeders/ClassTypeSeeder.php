<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mocks = ['Online', 'Offline',];
        foreach($mocks as $mock){
            DB::table('class_types')->insert(['name_en' => $mock]);
        }
    }
}
