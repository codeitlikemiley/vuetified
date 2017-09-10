<?php

return [
// If We Will Use Database , We Would Like To Fetch it By Order Increasing
            [
            'id'        => 1,
            'action'    => 'fa-fa',
            'title'     => 'Group Avatar Link',
            'href'      => '/',
            'active'    => true,
            'component' => null,
            'order'     => 0,
            // Relationship For Nested Sets of Menu
            'items'     => [
                                [
                                'id'        => 4,
                                'title'=> 'Main', 
                                'avatar'=> 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', 
                                'action'=> 'chat_bubble', 
                                'active'=> false, 
                                'href'=> '/', 
                                'component'=> 'Carousel'
                                ],
                            ],
            ],
            [
            'id'        => 2,
            'action'    => 'restaurant',
            'title'     => 'Group Icon Link',
            'href'      => '/support',
            'order'     => 1,
            'items'     => [
                                [ 'id' => 5,'title'=> 'Breakfast & brunch', 'action'=> 'chat_bubble', 'active'=> false ],
                                [ 'id' => 6,'title'=> 'New American', 'action'=> 'chat_bubble', 'active'=> false ],
                                [ 'id' => 7,'title'=> 'Sushi', 'action'=> 'chat_bubble', 'active'=> false ]
                            ]
            ],
            [
            'id'        => 3,
            'action'    => 'school',
            'title'     => 'Normal Group Link',
            'href'      => '/about',
            'order'     => 2,
            'items'     =>  [
                                [ 'id' => 8,'title'=> 'List Item' ]
                            ]
            ],
];