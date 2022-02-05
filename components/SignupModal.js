import { Dialog } from '@headlessui/react'
import TwitterLogo from '../assets/images/twitter-logo.svg'
import React, { useState } from 'react';

function SignupModal({ open, onClose }) {
    const [name, setName] = useState("");

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="fixed z-10 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="w-[600px] relative bg-white rounded mx-auto p-6 space-y-8">
                    <div className="flex justify-center">
                        <TwitterLogo className="w-8 h-8 text-primary"></TwitterLogo>
                    </div>
                    <h2 className="font-bold text-2xl">Create your account</h2>
                    <form>

                        <label 
                        
                        className="w-full relative block border border-gray-200 rounded-lg pt-6 pb-2 px-4">

                            <input value={name} className="w-full outline-none peer" onChange={(e) => setName(e.target.value)}></input>
                            <div className="absolute w-full h-full left-4 top-0 flex ${!name ? 'items-center': } text-gray-500 peer-focus:items-start peer-focus:text-sm peer-focus:pt-1">
                                <div>Name</div>
                            </div>


                        </label>
                    </form>
                    <button className="w-full text-center rounded-full bg-primary text-white py-2 px-6 font-bold">Create my account</button>
                </div>
            </div>
        </Dialog>
    )
}
export default SignupModal;