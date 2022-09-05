<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daily_quotes', function (Blueprint $table) {
            $table->id();
            $table->text('quote_ka');
            $table->text('quote_en');
            $table->boolean('published')->default(false);
            $table->timestamps();
        });

        DB::table('daily_quotes')->insert([
            [
                'quote_ka' => 'ჰაკათონი არის წამყვანი ონლაინ კოდინგის მასწავლებელი დამწყებთათვის. შემოგვიერთდით დღესვე და გადადგით ნაბიჯი მომავლისკენ',
                'quote_en'=>'Hackton is the leading online coding tutor for beginners join us today to take a step further.',
                'published'=>true,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],

        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_quotes');
    }
};
