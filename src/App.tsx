import { Route, Routes } from 'react-router-dom'
import Home from './_root/pages/Home'
import RootLayout from './_root/RootLayout'
import Watch from './_root/pages/Watch'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'
import Search from './_root/pages/Search'

function App() {
    return (
        <>
            <main className='flex h-screen box-border dark:bg-dark-2 w-screen'>
               <Routes>
                    <Route element={<RootLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='watch/:id' element={<Watch/>}/>
                        <Route path='search' element={<Search/>}/>
                    </Route>
               </Routes>
            </main>
            <Analytics/>
            <SpeedInsights/>
        </>
    )
}

export default App
