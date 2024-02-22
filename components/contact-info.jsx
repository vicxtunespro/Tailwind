import React from 'react'

export default function ContactInfo() {
  return (
    <div className="contact flex flex-col gap-4 md:flex-row md:basis-4/12">
    <div className="location bg-white dark:bg-slate-800 w-full py-8 rounded-lg border border-slate-400 flex flex-col gap-4 items-center">
        <div className="logo h-8 w-8 bg-orange-400 rounded-full"></div>
        <div className="info text-xl font-bold dark:text-slate-50">Kampala, Uganda</div>
    </div>
    <div className="location bg-white dark:bg-slate-800 w-full py-8 rounded-lg border border-slate-400 flex flex-col gap-4 items-center">
        <div className="logo h-8 w-8 bg-orange-400 rounded-full"></div>
        <div className="info text-xl font-bold dark:text-slate-50">+256-758-019-072</div>
    </div>
    <div className="location bg-white dark:bg-slate-800 w-full py-8 rounded-lg border border-slate-400 flex flex-col gap-4 items-center">
        <div className="logo h-8 w-8 bg-orange-400 rounded-full"></div>
        <div className="info text-xl font-bold dark:text-slate-50">vicitug@gmail.com</div>
    </div>
    </div>
  )
}
