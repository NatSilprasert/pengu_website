import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <main className='gradient-bg pt-36'>
        <section className='flex flex-col items-center gap-0'>
            <div className='flex flex-col items-center'>
                <Image 
                src='/assets/logo.png'
                alt='logo'
                height={48}
                width={48}
                />
                <b className='text-6xl mt-6'>บริการออกแบบเว็ปไซต์</b>
                <p className='mt-3 text-sm'>ทำให้ธุรกิจของคุณโดดเด่น ด้วยเว็บไซต์ที่ดึงดูดทุกสายตา</p>

                <div className='mt-6 flex gap-3'>
                    <Button>บริการของเรา</Button>
                    <Button variant={'secondary'}>ตัวอย่างผลงาน</Button>
                </div>
            </div>

            <div className='mt-[-30]'>
                <Image 
                    src='/assets/imac.png'
                    alt=''
                    width={800}
                    height={800}
                />
            </div>
        </section>
    </main>
  )
}

export default Hero
