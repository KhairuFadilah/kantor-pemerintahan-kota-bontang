<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataKantor extends Model
{
    use HasFactory;

    protected $table = 'data_kantor';
    protected $fillable = ['nama', 'alamat'];
}
