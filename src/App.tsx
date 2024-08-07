import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './_root/pages/Home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main className='flex h-screen w-screen box-border dark:bg-slate-800'>
               <Routes>
                    <Route index element={<Home/>}/>
               </Routes>
            </main>
        </>
    )
}

export default App
