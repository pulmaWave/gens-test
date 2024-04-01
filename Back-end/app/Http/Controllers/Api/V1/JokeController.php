<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJokeRequest;
use App\Http\Requests\UpdateJokeRequest;
use App\Http\Resources\JokeResource;
use App\Models\Joke;

class JokeController extends Controller
{
    public function index()
    {
        return JokeResource::collection(Joke::query()->inRandomOrder()->limit(1)->get());
    }

    public function show(Joke $joke)
    {
        return JokeResource::make($joke);
    }
    public function store(StoreJokeRequest $request)
    {
        $joke = Joke::create($request->validated());
        return new JokeResource($joke);
    }

    public function update(UpdateJokeRequest $request, Joke $joke)
    {
        $joke->update($request->validated());
        return new JokeResource($joke);
    }
}
