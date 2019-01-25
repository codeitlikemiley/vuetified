<?php

namespace Vuetified\Console\Commands;

use Illuminate\Console\Command;

class GenerateEchoKeys extends Command
{
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Client App ID and Client App Key in Laravel Echo Server';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'echo:generate';

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
        $this->call('echo:id');
        $this->call('echo:key');
    }
}
