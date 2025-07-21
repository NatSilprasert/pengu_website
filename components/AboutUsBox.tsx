'use client'
import Image from 'next/image'

const AboutUsBox = () => {

  return (
    <main
      className="orange-container fixed inset-0 z-90 flex items-center justify-center opacity-0"
    >
      <div className="relative">
        <Image
          className="relative z-40"
          src="/assets/imac.png"
          alt=""
          width={800}
          height={800}
        />
        <div className="orange-section absolute z-30 w-[84%] h-[48%] top-[13%] bg-amber-600 left-1/2 -translate-x-1/2 overflow-hidden"></div>
      </div>
    </main>
  )
}

export default AboutUsBox