<?php

namespace Vuetified\Console\Presets;

use InvalidArgumentException;
use Illuminate\Console\Command;
use Illuminate\Support\Traits\Macroable;

class PresetCommand extends Command
{
    use Macroable;

    /**
     * The console command signature.
     *
     * @var string
     */
    protected $signature = 'vuetified { type : The preset type (clear, fresh, example) }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Front End Scaffolding For Vuetified';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (static::hasMacro($this->argument('type'))) {
            return call_user_func(static::$macros[$this->argument('type')], $this);
        }

        if (! in_array($this->argument('type'), ['clear', 'fresh', 'example'])) {
            throw new InvalidArgumentException('Invalid preset.');
        }

        return $this->{$this->argument('type')}();
    }

    /**
     * Install the "fresh" preset.
     *
     * @return void
     */
    protected function none()
    {
        Presets\Clear::install();

        $this->info('Vuetified scaffolding removed successfully.');
    }

    /**
     * Install the "vuetified" preset with example laravel echo server events routes and channels.
     *
     * @return void
     */
    protected function example()
    {
        Presets\Example::install();

        $this->info('Vuetified Example scaffolding installed successfully.');
        $this->comment('Please run "npm install && npm run dev" to compile your fresh scaffolding.');
    }

    /**
     * Install the "vuetified" fresh preset.
     *
     * @return void
     */
    public function fresh()
    {
        Presets\Fresh::install();

        $this->info('Fresh Vuetified scaffolding installed successfully.');
        $this->comment('Please run "npm install && npm run dev" to compile your fresh scaffolding.');
    }

}
