'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

type SplitTextInstance = {
  words: Element[];
  lines: Element[];
  chars: Element[];
  revert: () => void;
}


const AboutUs = () => {
  const [height, setHeight] = useState(0)
  const [scale, setScale] = useState(1)
  const titleSplitRef = useRef<SplitTextInstance | null>(null)
  const textSplitRef = useRef<SplitTextInstance | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const h = window.innerHeight
    setHeight(h)
    setScale(h / 360)

    gsap.registerPlugin(SplitText)
    titleSplitRef.current = SplitText.create('.aboutus-info h1', {
      type: 'words',
    })
    textSplitRef.current = SplitText.create('.aboutus-info p', {
      type: "chars, lines",
      linesClass: "text-nowrap overflow-hidden",
    })
  }, [])

  useGSAP(() => {
    if (height === 0) return

    // Timeline แรก
    gsap.timeline({
      scrollTrigger: {
        trigger: '.monitor',
        start: '50% 50%',
        endTrigger: '.hero-section',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
    })

    // Timeline สอง
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'bottom top',
        endTrigger: '.about-section',
        end: '+=100%',
        scrub: true,
        pin: '.gradient-bg',
      },
    })

    tl.to('.about-section', {
      scale: scale,
      transformOrigin: '50% 50%',
      ease: 'power1.inOut',
      y: () => {
        const section = document.querySelector('.orange-section')
        if (section) {
          const rect = section.getBoundingClientRect()
          const rectTop = rect.top
          const newRectTop = (height - scale * (height - 2 * rectTop)) / 2
          console.log('newRectTop:', newRectTop)
          return -newRectTop - 30
        }
        return 0
      },
    })

    // Text animation timeline
    if (titleSplitRef.current && textSplitRef.current) {
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.screen-section',
          start: '50% top',
          endTrigger: document.body,
          toggleActions: 'play reverse play reverse', 
        },
      })

      textTl.from(titleSplitRef.current.words, {
        opacity: 0,
        stagger: 0.2,
      })
      textTl.from(textSplitRef.current.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.005,
        ease: 'power1.inOut'
      })
      textTl.from('.aboutus-info .element', {
        opacity: 0,
        ease: 'power1.inOut'
      }, '<')
      textTl.from('.about-button', {
        opacity: 0,
        ease: 'power1.inOut'
      }, '<')
    }
  }, [height, scale])

  return (
    <main className="about-section w-full scale-100 items-center flex flex-col min-h-screen">
      <div className="monitor relative items-center">
        <Image
          className="relative mr-0.5 z-40"
          src="/assets/imac.png"
          alt=""
          width={800}
          height={800}
        />
        <div className="screen-section absolute z-30 w-[84%] h-[48%] top-[13%] bg-amber-600 left-1/2 transform -translate-x-1/2 overflow-hidden">
          <div className="w-full h-full aboutus-bg object-cover">
            <section className="object-cover h-full aboutus-info flex flex-col items-center">
              <div className="mt-[-2%] scale-50 items-center text-center text-white">
                <h1 className="text-5xl">
                  เราไม่ใด้แค่สร้างเว็ป <br />
                  แต่เราสร้าง{' '}
                  <span className="font-prompt-semibold-italic">
                    ประสบการณ์
                  </span>
                </h1>
                <p className="mt-6 font-light text-sm">
                  เพราะทุกแบรนด์มีเอกลักษณ์ของตัวเอง เราจึงออกแบบและพัฒนาเว็บไซต์
                  <br />
                  ที่สะท้อนตัวตนธุรกิจของคุณ พร้อมประสบการณ์ที่ตราตรึงใจผู้ใช้งาน
                </p>

                <div className='about-button'>
                    <Button className=" mt-8 scale-90" variant={'secondary'}>
                    พูดคุยกับเรา
                    </Button>
                </div>
              </div>
              <div className="element mt-[-6%] w-1/2 h-2/5 bg-white rounded-2xl"></div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUs