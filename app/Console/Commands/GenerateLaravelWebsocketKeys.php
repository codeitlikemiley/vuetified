<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateLaravelWebsocketKeys extends Command
{
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Client App ID, Key and Secret in Laravel Websockets';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'websockets:generate';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('websockets:id');
        $this->call('websockets:key');
        $this->call('websockets:secret');
    }
}
