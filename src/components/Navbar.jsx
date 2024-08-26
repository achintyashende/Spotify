import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className=' w-ful flex justify-between items-center font-semibold'>
                <div className= ' flex items-center gap-2'>
                    <img onClick={()=>navigate(-1)} className=' w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={()=>navigate(+1)} className=' w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                <div className=' flex items-center gap-4'>
                    <p className=' bg-white text-black text-[15px] px-4 py-1 cursor-pointer rounded-2xl hidden md:block '>Explore premium</p>
                    <p className=' bg-black text-white border border-slate-600 text-[15px] px-3 py-1 cursor-pointer rounded-2xl hidden md:block '>Install App</p>
                    <p className=' bg-orange-500 text-balance w-7 h-7 rounded-full flex items-center justify-center '>A</p>
                </div>
            </div>
            <div className=' flex items-center gap-2 mt-4 '>
                <p className=' bg-white text-black py-1 px-4 rounded-2xl cursor-pointer'>All</p>
                <p className=' text-white border border-slate-600 cursor-pointer bg-black py-1 px-4 rounded-2xl '>Music</p>
                <p className=' text-white border border-slate-600 cursor-pointer bg-black py-1 px-4 rounded-2xl '>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
