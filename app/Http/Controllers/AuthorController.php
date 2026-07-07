<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Session\Store;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AuthorResource::collection(Author::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());

        $books = Author::all();
        return AuthorResource::collection($books);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuthorRequest $request, Author $author) {
        $author->update($request->validated());

        $author = Author::all();
        return AuthorResource::collection($author);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author) {
        if($author->books->empty()){
            $author->delete();
            return response()->json(['message' => 'Auteur succesvol verwijderd'], 200);
        }
        return response()->json(['message' => 'Error.'], 500);
    }
}
