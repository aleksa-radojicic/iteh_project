<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */


    public static $wrap = 'order';


    public function toArray($request)
    {
        return[
            'id' => $this->resource->id,
            'cost' => $this->resource->cost,
            'user_phone' => $this->resource->user_phone,
            'user_city' => $this->resource->user_city,
            'user_address' => $this->resource->user_address,
            'date' => $this->resource->created_at,
        ];
    }
}
