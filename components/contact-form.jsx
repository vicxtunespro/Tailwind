import React from 'react'

export default function ContactForm() {
  return (
    <div className="form w-full p-4 my-8 flex justify-center">
        <form action="#" className="max-w-[30rem]">
            <div className="form-body">
            <input type="text" placeholder="Full Name" className="p-2 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <input type="email" placeholder="Email Address" className="p-2 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <input type="text" placeholder="Subject" className="p-2 border-2 border-slate-300 w-full rounded-md mb-8" required></input>
            <textarea placeholder="Message" className="p-2 border-2 border-slate-300 w-full rounded-md mb-8 h-48" required></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-slate-800 text-white px-8 py-2 flex-none">Send Message</button>
        </form>
    </div>
  )
}
