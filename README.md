## Test Laravel React application

***Please read information below before you start!***

### Requirements:

1) composer
2) php 8.1+
3) mysql 8+

Installation:

- cd /to folder where you want to install this app (for example: cd /desktop/new folder)
- git init
- git remote add origin https://github.com/Tlancerinc/tlancer_mvc.git
- git pull
- cd /inside downloaded project
- composer install
- cp .env.example to .env
- open .env file and add empty database from your mysql
- php artisan migrate
- npm run dev
- open second console, shell or bash and run command "php artisan serve"
- after this you will be able to visit web page on http://127.0.0.1:8000


## Localization 

### Backend Translation

To set localization we use route with name **language**

    Route::get('language/{language}', function ($language) {
    Session()->put('locale', $language);

    return redirect()->back();
    })->name('language');

You can pass parameters to this route like:

    <Link href={route('language','en') >ENG</Link>

Where **language** is route name and **en** is parameter which indicates on language you want to set.

language translations ar located in ./lang folder. 
currently we only have ka.json where the translations are writen 

you can make a new translation like this:

    {
        "Home": "მთავარი"
    }

and this json file wil be sent to frontend for translation from **app/Http/Middleware/HandleInertiaRequests.php**

## Frontend Translation

to use translation you need to import Trans function like:

    import { Trans } from "../Localization/Trans"

and then call function Trans where you need to, like:

    { trans('Home') }

and if languege is set to **en** it will return "Home" and if **ka** will return "მთავარი" translated version
