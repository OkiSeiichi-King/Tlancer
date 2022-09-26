<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
