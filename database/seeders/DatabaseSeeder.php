<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Admin User moved from migration file. IN order to attach Role
        $admin = User::create([
            'name' => 'admin',
            'first_name' => 'admin',
            'last_name' => 'user',
            'birth_date' => now(),
            'phone' => '00000001',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'password' => bcrypt("admin"),
            'created_at'=>now(),
            'updated_at'=>now(),
        ]);

        $adminRole = Role::create(['name' => 'admin']); // I don't know if this is needed yet, but admin user that's not a teacher.

        $admin->assignRole($adminRole);

        Role::create(['name' => 'tutor']);
        Role::create(['name' => 'parent']);
        Role::create(['name' => 'student']);


    }
}
