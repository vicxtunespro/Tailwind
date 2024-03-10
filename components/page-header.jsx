import React from 'react'

export default function PageHeader({title, name}) {
  return(
  <div className="header h-60  dark:bg-slate-800 text-4xl font-black grid place-items-center" id={name}>
    <p className=" tracking-wider dark:text-sky-500 after:content-['']  after:h-0.5 after:w-16 after:mx-24 my-8 after:bg-slate-200 after:block text-center text-buddy">{title}</p>
  </div>
  )
}
