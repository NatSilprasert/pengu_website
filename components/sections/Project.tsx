'use client'
import React, { useRef } from 'react'
import ProjectScroll from '../common/ProjectScroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitTextInstance } from './AboutUs'
import { SplitText } from 'gsap/all'

const Project = () => {

    const textSplitRef = useRef<SplitTextInstance | null>(null)

    
    useGSAP(() => {
        
        textSplitRef.current = SplitText.create('.project-subtext', {
         type: "chars, lines",
         linesClass: "text-nowrap overflow-hidden",
       })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.project-scroll',
                start: 'top 95%',
                endTrigger: '.project-section',
                end: '95% bottom',
                pin: '.project-button',
                scrub: true
            }
        })

        if (textSplitRef.current?.chars) {
            gsap.from(textSplitRef.current.chars, {
                scrollTrigger: {
                trigger: '.project-subtext',
                start: 'top 90%',
                toggleActions: 'play reverse play reverse',
                },
                yPercent: 100,
                opacity: 0,
                stagger: 0.005,
                ease: 'power1.inOut',
            })
        }

    })

    return (
        <main className='project-section min-h-screen project-bg'>
            <div className='flex flex-col items-center pt-20 pb-80 text-white'>
                <div className='bg-[#171717]/50 py-2 px-3 rounded-md font-light'>
                    @pengu.studio
                </div>
                <b className='mt-4 text-7xl font-normal'>
                    <span className='font-prompt-semibold-italic'>โปรเจกต์</span> ของเรา
                    </b>
                <p className='project-subtext mt-4 font-light text-center'>
                    เราเปลี่ยนไอเดียที่ท้าทาย มาสร้างสรรค์เป็นงานดีไซน์ที่มีความโดดเด่น
                    <br/>และการเล่าเรื่องที่เข้าถึงผู้ชม
                </p>
                <button className='project-button text-lg mt-8 px-7 py-5 z-100 bg-white text-primary rounded-full'>ชมผลงานทั้งหมด</button>

                <div className='project-scroll w-full mt-8 border-red-600'>
                    <ProjectScroll />
                </div>
            </div>
        </main>
    )
}

export default Project
