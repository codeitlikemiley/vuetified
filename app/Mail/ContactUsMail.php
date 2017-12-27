<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactUsMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return 
        $this->subject('You Got A Message From: '.$this->data['name']. ', '. $this->data['subject'])   
        ->replyTo($this->data['email'])
        ->markdown('emails.support.contact_us')
        ->with([
            'subject' => $this->data['subject'],
            'message' => $this->data['message'],
            'sender' => $this->data['name'],
            'email' => $this->data['email'],
        ])
        ;
    }
}
