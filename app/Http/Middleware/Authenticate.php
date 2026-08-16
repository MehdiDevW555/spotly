<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    // {
    //     return $request->expectsJson() ? null : route('login');
    // }
    protected function redirectTo(Request $request)
    {
        if (!$request->expectsJson()) {
            if ($request->is('shopAdmin') || $request->is('shopAdmin/*')) {
                return route('shopAdmin_login');
            };
            return route('login');

        }
    }
}
