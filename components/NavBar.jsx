import Link from 'next/link';
export const NavBar = () => {
  return (
    <div className='absolute z-40 font-caudex pt-4 w-screen text-white'>
      <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-transparent">
        <span className="font-bold text-xl flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#512203] mb-4 md:mb-0">Omilia</span>
        <h1 className='hidden md:text-2xl md:flex lg:flex lg:text-4xl my-0 mx-auto ml-4'>OMILIA VISUALS</h1>
        <div className="space-x-4 md:space-x-8 text-xs md:text-base lg:text-lg">
          <Link className="hover:underline" href="#">
            ABOUT US
          </Link>
          <Link className="hover:underline" href="#">
            CLIENT GALLERY
          </Link>
          <Link className="hover:underline" href="#">
            SERVICES
          </Link>
          <Link className="hover:underline" href="#">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  )
}