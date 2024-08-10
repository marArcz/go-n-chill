import { MdSearch } from 'react-icons/md'

const Search = () => {
    return (
        <section className='w-full'>
            <div className="relative w-full lg:h-[40vh] h-[30vh] overflow-hidden">
                <div className="backdrop-overlay z-[5]"></div>
                <img src="/images/search-backdrop.jpg" alt="" className="absolute object-cover w-full h-full object-top" />
            </div>
            <div className=' padded-container'>
                <div className="search-box relative w-full">
                    <input
                        type="text"
                        className=' placeholder:text-gray-50 lg:text-lg w-full input-glass relative rounded-2xl px-5 h-[55px] text-white'
                        placeholder='Search for a movie'
                    />
                    <div className="absolute top-[50%] translate-y-[-50%] end-[15px]">
                        <MdSearch className="text-gray-100" size={20} />
                    </div>
                </div>
                <h3 className='text-2xl mt-5 text-white'>Results for: "Deadpool</h3>
            </div>
        </section>
    )
}

export default Search