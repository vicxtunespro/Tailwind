import React from 'react'

export default function SectionHeader({title}) {
  return (
    <div className="styled-title my-8">
        <p className="text-3xl font-bold dark:text-white">{title}</p>
        <div className="h-0.5 w-32 bg-slate-200 dark:bg-slate-500 after:block after:h-full after:w-8 after:bg-blue-500 dark:after:bg-slate-200 after:content-['']"></div>
    </div>
  )
}
