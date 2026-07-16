<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'review', 'stars', 'book_id'];
    public function book() {
        return $this->belongsTo(Book::class);
    }
}
