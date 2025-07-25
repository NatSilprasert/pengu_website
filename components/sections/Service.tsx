import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <main className='min-h-screen flex flex-col items-center py-20 px-48'>
        <div className='border text-primary/90 border-gray-300 py-1 px-3 rounded-md bg-white/50'>
            <p>services</p>
        </div>
        <b className='font-semibold text-6xl mt-4'>บริการของเรา</b>
        <p className='text-center mt-4 font-normal'>ครบทุกบริการด้านการออกแบบและพัฒนาเว็ปไซต์ พร้อมขับเคลื่อน<br/>แบรนด์ของคุณสู่ความสำเร็จ</p>
        <div className='grid grid-cols-3 gap-4 mt-12'>
            <div className="border inset-0 rounded-2xl overflow-hidden bg-white/50">
                <div className="relative w-full h-52 bg-gray-500">
                    {/* <Image
                    src="/assets/your-image.jpg" // เปลี่ยนเป็น path ที่ถูกต้อง
                    alt="Project preview"
                    fill
                    className="object-cover"
                    /> */}
                </div>
                
                <div className="p-6 flex flex-col gap-2">
                    <Image 
                        src='/icon/web.png'
                        alt=''
                        width={36}
                        height={36}
                    />
                    <b className="mt-1 font-semibold text-xl">Landing / Sales Page</b>
                    <p className="text-sm text-gray-700">
                        ออกแบบมาเพื่อเพิ่มยอดขาย ช่วยให้ธุรกิจเข้าถึงลูกค้าได้อย่างมีประสิทธิภาพ เหมาะสำหรับเจ้าของธุรกิจ SME และ Start Up หรือพ่อค้าแม่ค้าออนไลน์
                    </p>
                </div>
            </div>
            <div className="border inset-0 rounded-2xl overflow-hidden bg-white/50">
                <div className="relative w-full h-52 bg-gray-500">
                    {/* <Image
                    src="/assets/your-image.jpg" // เปลี่ยนเป็น path ที่ถูกต้อง
                    alt="Project preview"
                    fill
                    className="object-cover"
                    /> */}
                </div>

                <div className="p-6 flex flex-col gap-2">
                    <Image 
                        src='/icon/person.png'
                        alt=''
                        width={36}
                        height={36}
                    />
                    <b className="mt-1 font-semibold text-xl">Portfolio Website</b>
                    <p className="text-sm text-gray-700">
                        สำหรับโชว์ผลงานอย่างมืออาชีพ สร้างความน่าเชื่อถือ และโดดเด่นในสายงาน เหมาะสำหรับฟรีแลนซ์ นักออกแบบ ศิลปิน และผู้สมัครงาน
                    </p>
                </div>
            </div>
            <div className="border inset-0 rounded-2xl overflow-hidden bg-white/50">
                <div className="relative w-full h-52 bg-gray-500">
                    {/* <Image
                    src="/assets/your-image.jpg" // เปลี่ยนเป็น path ที่ถูกต้อง
                    alt="Project preview"
                    fill
                    className="object-cover"
                    /> */}
                </div>

                <div className="p-6 flex flex-col gap-2">
                    <Image 
                        src='/icon/art.png'
                        alt=''
                        width={36}
                        height={36}
                    />
                    <b className="mt-1 font-semibold text-xl">Branding Website</b>
                    <p className="text-sm text-gray-700">
                        ช่วยถ่ายทอดตัวตน วิสัยทัศน์ และคุณค่าของแบรนด์ผ่านดีไซน์ที่น่าจดจำ เหมาะกับธุรกิจที่ต้องการสร้างความน่าเชื่อถือ และสร้างความแตกต่างในตลาดออนไลน์

                    </p>
                </div>
            </div>
            
        </div>
    </main>
  )
}

export default Service
