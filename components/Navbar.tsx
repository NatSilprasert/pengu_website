import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {

    const navList = [
        'หน้าหลัก',
        'เกี่ยวกับ',
        'บริการ',
        'ผลงาน',
        'ติดต่อ',
    ]

    return (
        <div className="fixed top-0 py-3 w-full flex items-center border border-gray-300 px-24 bg-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
                {/* <Image src="/assets/logo.png" alt="logo" width={32} height={32} /> */}
                <b className="mt-1 text-lg">PENGU STUDIO</b>
            </div>

            {/* Nav List */}
            <div className="flex gap-8 absolute left-1/2 transform -translate-x-1/2">
                {navList.map((nav, index) => (
                        <p 
                            key={index}
                            className=''
                        >
                            {nav}
                        </p>
                    ))
                }
            </div>

            {/* Button */}
            <div className="ml-auto">
                <Button>เข้าสู่ระบบ</Button>
            </div>
        </div>
    )
}

export default Navbar
