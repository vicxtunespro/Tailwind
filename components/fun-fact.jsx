import React from 'react'

export default function FunFact() {
  return (
    <div className='mt-8'>
          <div className="styled-title">
    <p className="text-3xl font-bold dark:text-white">Fun Facts</p>
    <div className="h-0.5 w-32 bg-slate-200 dark:bg-slate-500 after:block after:h-full after:w-8 after:bg-blue-500 dark:after:bg-slate-200 after:content-['']"></div>
  </div>
        <div className="fun-group">
            <Fun/>
        </div>
    </div>
  )
}
function Fun(){
return(
  <div class="fun my-8 bg-slate w-80 bg-white dark:bg-slate-700 flex shadow-lg border border-slate-500 rounded-lg overflow-hidden">
    <div class="icon w-[20%] px-4 flex justify-center items-center bg-slate-100 dark:bg-slate-800 text-4xl">🍉</div>
    <div class="details flex flex-col p-8">
        <p class="amount text-4xl font-bold text-slate-400 mb-2">4</p>
        <p class="hobbie text-xl font-bold tracking-wide text-slate-700 dark:text-slate-100">Programming languages</p>
    </div>
  </div>
    )
}