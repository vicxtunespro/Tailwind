import React from 'react'

export default function ContactForm() {
  return (
    <div class="form w-full p-4 my-8 flex justify-center">
        <form action="#" class="p-8 max-w-[30rem]">
            <div class="form-body">
            <input type="text" placeholder="Full Name" class="p-4 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <input type="email" placeholder="Email Address" class="p-4 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <input type="text" placeholder="Subject" class="p-4 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <textarea placeholder="Message" class="p-4 border-2 border-slate-300 w-full rounded-md mb-8 h-48" required></textarea>
            </div>
            <button class="bg-blue-600 hover:bg-slate-800 text-white px-8 py-4 flex-none">Send Message</button>
        </form>
    </div>
  )
}
