import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {

    return (
        <main className='hero-section z-0'>
            <section className='flex flex-col items-center gap-0 pt-36'>
                <div className='flex flex-col items-center'>
                    <Image 
                    src='/assets/logo.png'
                    alt='logo'
                    height={48}
                    width={48}
                    />
                    <b className='font-semibold text-center text-6xl mt-6'>บริการออกแบบ<br/>และพัฒนาเว็ปไซต์</b>
                    <p className='mt-3 text-md font-light'>ทำให้ธุรกิจของคุณโดดเด่น ด้วยเว็บไซต์ที่ดึงดูดทุกสายตา</p>

                    <div className='button mt-6 flex gap-3'>
                        <Button>บริการของเรา</Button>
                        <Button variant={'secondary'}>ตัวอย่างผลงาน</Button>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Hero
