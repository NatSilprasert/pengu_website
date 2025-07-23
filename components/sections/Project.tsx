'use client'
import React from 'react'
import { Button } from '../ui/button'
import ProjectScroll from '../common/ProjectScroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Project = () => {

    useGSAP(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: '.project-scroll',
                start: 'top bottom',
                endTrigger: '.project-section',
                end: '95% bottom',
                pin: '.project-button',
                scrub: true
            }
        })

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
                <p className='mt-4 font-light text-center'>
                    เรานำไอเดียที่กล้าท้าทาย มาสร้างสรรค์เป็นงานดีไซน์ที่มีความโดดเด่น
                    <br/>และการเล่าเรื่องที่เข้าถึงผู้ชม
                </p>
                <button className='project-button text-lg mt-8 px-7 py-5 z-100 bg-white text-primary rounded-full'>ชมผลงานทั้งหมด</button>

                <div className='project-scroll w-full mt-24 border-red-600'>
                    <ProjectScroll />
                </div>
            </div>
        </main>
    )
}

export default Project
