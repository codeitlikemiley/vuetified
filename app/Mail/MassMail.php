<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MassMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var mixed
     */
    public $data;

    /**
     * @var mixed
     */
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data, $user)
    {
        $this->data = $data;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return
        $this->subject($this->data['subject'])
             ->replyTo(config('mail.from.address'))
             ->markdown('emails.support.mass_email')
             ->with([
                 'message'        => $this->data['message'],
                 'with_panel'     => $this->data['with_panel'],
                 'panel_message'  => $this->data['panel_message'],
                 'with_button'    => $this->data['with_button'],
                 'button_url'     => $this->data['button_url'],
                 'button_color'   => $this->data['button_color'],
                 'button_message' => $this->data['button_message'],
                 'button_url'     => $this->data['button_url'],
                 'signature'      => $this->data['signature']
             ]);
    }

    public function tags()
    {
        return ['mass_mail', 'user_id:'.$this->user['id']];
    }
}
