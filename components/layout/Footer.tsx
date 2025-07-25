import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-primary p-24 py-12 text-white flex flex-col items-center'>
        <div className='px-24 flex w-full justify-between items-center'>
            <div className='text-3xl'>
                <b>
                    We build
                    <br />website people
                    <br />can&apos;t ignore.
                </b>
            </div>

            <div className='flex flex-col gap-6'>
                <b className='text-xl'>Pengu Studio</b>
                <div className='flex gap-4'>
                    <Image src='/social/instagram.png' alt='instagram' width={28} height={28}/>
                    <Image src='/social/facebook.png' alt='facebook' width={28} height={28}/>
                    <Image src='/social/line.png' alt='line' width={28} height={28}/>
                    <Image src='/social/tiktok.png' alt='tiktok' width={28} height={28}/>
                </div>
                <p>natsilprasert@gmail.com</p>
                <p>+66 88-991-3347</p>
            </div>

            {/* <div className='font-light'>
                <b className='font-semibold'>Navigation Links</b>
                <div className='flex flex-col gap-2 mt-4'>
                    <p>หน้าหลัก</p>
                    <p>เกี่ยวกับ</p>
                    <p>บริการ</p>
                    <p>ผลงาน</p>
                    <p>ติดต่อ</p>
                </div>
            </div> */}
        </div>
        <div className='border border-white/50 w-full mt-16'></div>
        <p className='mt-12'>© 2025 Pengu Studio. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
