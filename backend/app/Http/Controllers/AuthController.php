<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:6|max:40',
            'email' => 'required|string|email|max:40|unique:users',
            'password' => 'required|string|min:8|max:40'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),

        // ]);
        User::insert([

            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => 'regular',
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now()

        ]);
        return response()->json([
            'message' => 'Successful registration.',
        ]);
    }


    public function login(Request $request)
    {

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => false
            ]);
        }

        $user = User::with('orders')->where('email', $request->email)->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        $resourced_user = new UserResource($user);

        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $resourced_user,
        ]);
    }

    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successful logout',
        ]);
    }
}
