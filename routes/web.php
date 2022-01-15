<?php

use App\Models\User;
use Illuminate\Http\Request;
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
    $users=User::where('name','like','%'.request()->get('search').'%')->latest()->paginate(10);


    return inertia('Home',['time'=>now()->toTimeString(),'users'=>$users,'debounce'=>request()->get('search')]);
})->name("users.index");
Route::get('/about', function () {
    return inertia('About');
});
Route::post('/signout', function () {
   dd(request()->all());
});

Route::get('/register',function(){
    return inertia('User/Create');
});
Route::post('/user/register',function(){


   $attributes= request()->validate(['name'=>"required",'email'=>'required|email','password'=>'required']);

    User::create($attributes);

    return redirect()->route('users.index');
});
