<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author_id' => $this->faker->numberBetween(1, 50),
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->sentence,
        ];
    }
}
