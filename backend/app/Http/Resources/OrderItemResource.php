<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'order_item';


    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'order_id' => $this->resource->order_id,
            'price' => $this->resource->price,
            'quantity' => $this->resource->quantity,
            'product' => new ProductResource($this->resource->product),
        ];
    }
}
