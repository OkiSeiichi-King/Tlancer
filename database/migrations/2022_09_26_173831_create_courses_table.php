<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->unsignedInteger('max_student');
            $table->unsignedInteger('course_duration_number');
            $table->unsignedDouble('price');
            $table->dateTime('start_date');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('class_type_id');
            $table->unsignedBigInteger('sylabus_id')->nullable();
            $table->unsignedBigInteger('course_preview_id')->nullable();
            $table->unsignedBigInteger('currency_id')->nullable();
            $table->unsignedBigInteger('course_status_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('class_type_id')->references('id')->on('class_types');
            $table->foreign('sylabus_id')->references('id')->on('files');
            $table->foreign('course_preview_id')->references('id')->on('files');
            $table->foreign('currency_id')->references('id')->on('currencies');
            $table->foreign('course_status_id')->references('id')->on('course_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
