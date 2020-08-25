<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Routes Tasks
Route::get('/task', 'TaskController@getTasks');
Route::get('/task/{id}', 'TaskController@getTaskById');
Route::post('/task', 'TaskController@createTask');
Route::put('/task/{id}', 'TaskController@updateTask');
Route::delete('/task/{id}', 'TaskController@deleteTask');