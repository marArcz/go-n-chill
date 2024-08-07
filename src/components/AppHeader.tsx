import { MdSearch } from "react-icons/md";

const AppHeader = () => {
    return (
        <>
            <header className='app-header'>
                <div>
                    <img src="/images/logo-text.png" alt="" />
                </div>
                <div className="ms-auto">
                    <div className="search-box relative ">
                        <input
                            type="text"
                            className='  placeholder:text-gray-50 text-lg input-glass relative rounded-2xl px-5 h-[55px] text-white'
                            placeholder='Search for a movie'
                        />
                        <div className="absolute top-[50%] translate-y-[-50%] end-[15px]">
                            <MdSearch className="text-gray-100" size={20}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader