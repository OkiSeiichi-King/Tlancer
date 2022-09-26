<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mocks = ['Dollar', 'Pound',];
        foreach($mocks as $mock){
            DB::table('currencies')->insert(['currency' => $mock]);
        }
    }
}
