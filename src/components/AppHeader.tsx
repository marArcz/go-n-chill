import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
    scrollPosition: number
    showSearchBox?: boolean
}
const AppHeader = ({ scrollPosition, showSearchBox = true }: Props) => {
    return (
        <>
            <header className={`app-header ${scrollPosition >= 200 ? 'filled' : ''}`}>
                <div>
                    <Link to='/'>
                        <img src="/images/logo-text.png" alt="" className="" />
                    </Link>
                </div>
                {
                    showSearchBox && (
                        <div className="ms-auto">
                            <div className="search-box relative ">
                                <input
                                    type="text"
                                    className=' placeholder:text-gray-50 lg:text-lg input-glass relative rounded-2xl px-5 h-[55px] text-white'
                                    placeholder='Search for a movie'
                                />
                                <div className="absolute top-[50%] translate-y-[-50%] end-[15px]">
                                    <MdSearch className="text-gray-100" size={20} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </header>
        </>
    )
}

export default AppHeader