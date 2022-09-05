<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  * @mixin Builder
 * @method static Builder|static query()
 * @method static static make(array $attributes = [])
 * @method static static create(array $attributes = [])
 * @method static static forceCreate(array $attributes)
 * @method \App\Models\RolePermission firstOrNew(array $attributes = [], array $values = [])
 * @method \App\Models\RolePermission firstOrFail($columns = ['*'])
 * @method \App\Models\RolePermission firstOrCreate(array $attributes, array $values = [])
 * @method \App\Models\RolePermission firstOr($columns = ['*'], \Closure $callback = null)
 * @method \App\Models\RolePermission firstWhere($column, $operator = null, $value = null, $boolean = 'and')
 * @method \App\Models\RolePermission where($column, $operator = null, $value = null, $boolean = 'and')
 * @method \App\Models\RolePermission updateOrCreate(array $attributes, array $values = [])
 * @method null|static first($columns = ['*'])
 * @method static static findOrFail($id, $columns = ['*'])
 * @method static static findOrNew($id, $columns = ['*'])
 * @method static null|static find($id, $columns = ['*'])
 *
 * @property int id
 * @property string quote_ka
 * @property string quote_en
 * @property string published
 */
class DailyQuote extends Model
{
    use HasFactory;

    protected $fillable = [
        'quote_ka',
        'quote_en',
        'published'
    ];
}
