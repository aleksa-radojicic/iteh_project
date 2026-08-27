# Backend

## Manual setup
Docker is the recommended setup. For running the services directly on the host, install:
* PHP 8.2+
* Composer

Run:
```sh
cd backend

composer install
cp .env.example .env
php artisan key:generate

touch database/database.sqlite

php artisan migrate:fresh --seed
php artisan serve
```

The backend will be available at `http://localhost:8000`.

By default, the Laravel application is configured to use SQLite. MySQL can be configured through the backend `.env` file.