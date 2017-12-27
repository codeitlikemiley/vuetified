<?php

namespace Api\Account;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Rules\ValidateZip;
use Illuminate\Validation\Rule;
use App\Rules\MustMatchPassword;
use App\Http\Resources\User\UserResource;

class AccountController extends Controller
{

    public function __construct()
    {
        // $this->middleware(['can:edit-profile']);
    }

    public function updateAccount(Request $request)
    {
        $user = $request->user_id ? User::find($request->user_id) : $request->user();

        $data = request()->validate([
            'email' => [
                'sometimes',
                'required',
                'email',
                Rule::unique('users')->ignore($user->id),
            ],
			'username' => [
                'sometimes',
                'required',
               Rule::unique('users')->ignore($user->id),
            ],
            'old_password' => [
                'sometimes',
                'required',
                new MustMatchPassword($user->password)
            ],
			'password' => 'required_with:old_password|min:6|confirmed',
            'password_confirmation' => 'required_with:password'
        ]);
        // fill will only assign those in the fillable fields of user
        $user->fill($data);
        $save = $user->save();
        if($save){
            return (new UserResource($user->load('profile','referralLink')))->additional(['message' => 'Account Updated!']);
        }

    }

    public function updateProfile(Request $request)
    {
        
        $user = $request->user_id ? \User::find($request->user_id) : $request->user();
        $data = request()->validate([
            'first_name' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'last_name' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'contact_no' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'address_1' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'address_2' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'city' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'country' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'zip_code' => [
                'sometimes',
                'required',
                new ValidateZip
            ],
            'state_province' => [
                'sometimes',
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
        ]);
        $profile = $user->profile;
        $updated = $profile->update($data);
        if($updated){
            return (new UserResource($user->load('profile','referralLink')))->additional(['message' => 'Profile Updated!']);
        }
    }

    public function updateReferralLink(Request $request)
    {
        $user = $request->user_id ? User::find($request->user_id) : $request->user();
        $link = $user->referralLink;
        $data = request()->validate([
            'link' => [
                'regex:/^[a-zA-Z0-9 +@#]+$/',
                Rule::unique('links')->ignore($link->id),
            ]
        ]);
        
        $updated = $link->update($data);
        if($updated){
            return (new UserResource($user->load('profile','referralLink')))->additional(['message' => 'Referral Link Updated!']);
        }
    }
}
