<?php

namespace Vuetified\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Encryption\Encrypter;
use Illuminate\Console\ConfirmableTrait;

class GenerateEchoAppKey extends Command
{
    use ConfirmableTrait;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set Laravel Echo Server Client Key';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'echo:key
                        {--show : Display the key instead of modifying files}
                        {--force : Force the operation to run when in production}';

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
        $key = $this->generateRandomKey();

        if ($this->option('show')) {
            return $this->line('<comment>'.$key.'</comment>');
        }

// Next, we will replace the application key in the environment file so it is

// automatically setup for this developer. This key gets generated using a

// secure random byte generator and is later base64 encoded for storage.
        if (!$this->setKeyInEnvironmentFile($key)) {
            return;
        }

        $this->laravel['config']['echo.client_key'] = $key;

        $this->info("Laravel Echo Server Client KEY: [$key] set successfully.");
    }

    protected function generateRandomKey()
    {
        return 'base64:'.base64_encode(
            Encrypter::generateKey($this->laravel['config']['app.cipher'])
        );
    }

    /**
     * Get a regex pattern that will match env APP_KEY with any random key.
     *
     * @return string
     */
    protected function keyReplacementPattern()
    {
        $escaped = preg_quote('='.$this->laravel['config']['echo.client_key'], '/');

        return "/^ECHO_CLIENT_KEY{$escaped}/m";
    }

    /**
     * @param $key
     */
    protected function setKeyInEnvironmentFile($key)
    {
        $currentKey = $this->laravel['config']['echo.client_key'];

        if (strlen($currentKey) !== 0 && (!$this->confirmToProceed())) {
            return false;
        }

        $this->writeNewEnvironmentFileWith($key);

        return true;
    }

    /**
     * Write a new environment file with the given key.
     *
     * @param  string $key
     * @return void
     */
    protected function writeNewEnvironmentFileWith($key)
    {
        file_put_contents($this->laravel->environmentFilePath(), preg_replace(
            $this->keyReplacementPattern(),
            'ECHO_CLIENT_KEY='.$key,
            file_get_contents($this->laravel->environmentFilePath())
        ));
    }
}
