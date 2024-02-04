import React from 'react'

export default function PageHeader({title}) {
  return(
  <div className="header h-60 bg-slate-50 dark:bg-slate-800 text-6xl font-black grid place-items-center">
    <p className="tracking-wider dark:text-white after:content-['']  after:h-0.5 after:w-16 after:mx-24 my-8 after:bg-slate-200 after:block text-center">{title}</p>
  </div>
  )
}
