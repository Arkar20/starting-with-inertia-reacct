<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/users', function () {
    $users=User::where('name','like','%'.request()->get('search').'%')->paginate(10);


    return inertia('Home',['time'=>now()->toTimeString(),'users'=>$users,'search'=>request()->get('search')]);
});
Route::get('/about', function () {
    return inertia('About');
});
Route::post('/signout', function () {
   dd(request()->all());
});
