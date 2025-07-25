'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

const Process = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const processText = document.querySelector(".text-process-container");
        const processCard = document.querySelector(".card-process-container");

        if (processText && processCard) {
            const processTextRect = processText.getBoundingClientRect();
            const processCardRect = processCard.getBoundingClientRect();

            const heightDiff = processCardRect.height - processTextRect.height;

            ScrollTrigger.create({
                trigger: processCard,
                start: "top 20%",
                end: `+=${heightDiff}`,
                pin: processText,
                scrub: true,
            });
        }

        const textSplit = SplitText.create('.process-subtext', {
         type: "chars, lines",
         linesClass: "text-nowrap overflow-hidden",
       })

        gsap.from(textSplit.chars, {
            scrollTrigger: {
            trigger: '.process-subtext',
            start: 'top 90%',
            toggleActions: 'play none play none',
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.005,
            ease: 'power1.inOut',
        })

    }, { scope: containerRef });

    return (
        <main className='min-h-screen w-full py-20 px-48'>
            <div className='flex gap-24'>
                <div>
                    <div className="text-process-container flex flex-col gap-4">
                        <div className='border flex items-center gap-1 text-primary/90 border-gray-300 py-1 px-3 rounded-md bg-white/50 w-fit'>
                            <Image src='/assets/star.png' alt='' width={12} height={12}/>
                            <p>
                                process
                            </p>
                        </div>
                        <b className='mt-2 font-semibold text-6xl'>
                            ขั้นตอน
                            <br />ดำเนินการ
                        </b>
                        <p className='w-max process-subtext'>เราดูแลคุณตั้งแต่ไอเดียเริ่มต้น จนถึงเว็บไซต์ที่พร้อมใช้งาน <br/>ทุกขั้นตอนคือการร่วมมือเพื่อความสำเร็จของคุณ</p>
                    </div>
                </div>

                <div className='card-process-container w-full flex flex-col gap-4'>
                    <div className='w-full h-80 bg-white/50 rounded-4xl border border-gray-300'>

                    </div>
                    <div className='w-full h-80 bg-white/50 rounded-4xl border border-gray-300'>

                    </div>
                    <div className='w-full h-80 bg-white/50 rounded-4xl border border-gray-300'>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Process
