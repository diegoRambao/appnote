<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function getTasks(){
        $tasks = Task::all();
        return response()->json($tasks, 200);
    }

    public function getTaskById($id){
        $task = Task::find($id);
        return response()->json($task, 200);
    }

    public function createTask(Request $request){
        $task = Task::create($request->all());
        return response()->json($task, 200);
    }

    public function updateTask(Request $request, $id){
        $task = Task::findOrFail($id);
        $response = $task->update($request->all());
        return response()->json($response, 200);
    }

    public function deleteTask($id){
            $task = Task::find($id);
            $response = $task->delete();
        return response()->json($response, 200);
    }
}