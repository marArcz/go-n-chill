import { MdSearch } from "react-icons/md";

const AppHeader = () => {
    return (
        <>
            <header className='app-header'>
                <div>
                    <img src="/images/logo-text.png" alt="" />
                </div>
                <div className="ms-auto">
                    <div className="search-box relative">
                        <input
                            type="text"
                            className='bg-dim-1 glass relative rounded-2xl px-5 h-[55px] text-white'
                            placeholder='Search for a movie'
                        />

                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader