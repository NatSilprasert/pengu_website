'use client'
import { Send, Sparkle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {

  useGSAP(() => {
        
        const textSplit = SplitText.create('.contact-subtext', {
         type: "chars",
         linesClass: "text-nowrap overflow-hidden",
       })

        gsap.from(textSplit.chars, {
            scrollTrigger: {
            trigger: '.contact-subtext',
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.005,
            ease: 'power1.inOut',
        })
        

    })

  return (
    <main className='contact-section min-h-screen contact-bg rounded-b-[8xl] px-48 py-30 flex text-white items-center'>
      <div className='flex flex-col gap-12 w-1/2 pb-20'>
        <div className='flex items-center gap-1 bg-[#F63A05]/20 py-2 px-3 rounded-md font-light w-fit'>
            <Sparkle  width={12} height={12} fill="white"/>
            <p>
              contact us
            </p>
        </div>
        <b className='font-prompt-semibold-italic text-8xl'>
          ร่วมงาน
          <br/>กับเรา
        </b>
        <p className='contact-subtext font-light w-3/4'>หากคุณมีไอเดีย โปรเจกต์ หรือกำลังมองหาความช่วยเหลือในด้านการออกแบบและพัฒนาเว็บไซต์ เรายินดีให้คำปรึกษาฟรีโดยไม่มีค่าใช้จ่าย เพื่อช่วยให้คุณสามารถเริ่มต้นได้อย่างมั่นใจ</p>
        <div className='flex gap-4'>
            <Image src='/social/instagram.png' alt='instagram' width={28} height={28}/>
            <Image src='/social/facebook.png' alt='facebook' width={28} height={28}/>
            <Image src='/social/line.png' alt='line' width={28} height={28}/>
            <Image src='/social/tiktok.png' alt='tiktok' width={28} height={28}/>
        </div>
      </div>

      <div className='flex flex-col w-1/2 p-10 h-fit bg-primary/50 rounded-4xl'> 
        <h3 className="w-full text-center text-2xl font-semibold mb-6">Send a Message</h3>
        <form className="space-y-6" >
          <div>
              <label htmlFor="name" className="block text-left text-sm mb-2">Your Name</label>
              <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-lg"
                  placeholder="Enter Your Name..."
              />
          </div>

          <div>
              <label htmlFor="email" className="block text-left text-sm fony-medium mb-2">Your Email</label>
              <input 
                  type="text" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="example@gmail.com..."
              />
          </div>
          
          <div>
              <label htmlFor="message" className="block text-left text-sm fony-medium mb-2">Your Message</label>
              <textarea 
                  id="message" 
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                  placeholder="Enter Message..."
              />
          </div>

          <Button variant={'secondary'} className='flex gap-2 w-full mt-4'>
              Send Message
              <Send size={16}/>
          </Button>
      </form>
      </div>
    </main>
  )
}

export default Contact
