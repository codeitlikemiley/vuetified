<?php

namespace Vuetified\Console\Commands;

use Vuetified\Vuetified;
use Illuminate\Console\Command;

class VersionCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vuetified:version';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'View the current version of Vuetified';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->line('<info>Vuetified</info> version <comment>'.Vuetified::$version.'</comment>');
    }
}
