## Test Laravel React application

***Please read information below before you start!***

### Requirements:

1) composer
2) php 8.1+
3) mysql 8+

Installation:

- cd /to folder where you want to install this app (for example: cd /desktop/new folder)
- git init
- git add "this repository"
- git pull
- cd /inside downloaded project
- composer install
- cp .env.example to .env
- open .env file and add empty database from your mysql
- php artisan migrate
- npm run dev
- open second console, shell or bash and run command "php artisan serve"
- after this you will be able to visit web page on http://127.0.0.1:8000
