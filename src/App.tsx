import { Route, Routes } from 'react-router-dom'
import Home from './_root/pages/Home'

function App() {
    return (
        <>
            <main className='flex h-screen box-border dark:bg-dark-2 overflow-y-auto w-screen'>
               <Routes>
                    <Route index element={<Home/>}/>
               </Routes>
            </main>
        </>
    )
}

export default App
