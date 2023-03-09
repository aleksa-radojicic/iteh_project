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
        return [
            'id' => $this->id,
            'cost' => $this->cost,
            'name' => $this->name,
            'surname' => $this->surname,
            'user_phone' => $this->user_phone,
            'user_address' => $this->user_address,
            'date' => $this->created_at,
            'order_items' => new OrderItemCollection($this->order_items)
        ];
    }
}
