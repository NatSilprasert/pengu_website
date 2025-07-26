"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const processText = containerRef.current?.querySelector(".text-process-container");
    const processCard = containerRef.current?.querySelector(".card-process-container");
    const cards = containerRef.current
      ? Array.from(containerRef.current.querySelectorAll(".card-process")) as HTMLElement[]
      : [];

    if (processText && processCard) {
      const processTextRect = processText.getBoundingClientRect();
      const processCardRect = processCard.getBoundingClientRect();
      const heightDiff = processCardRect.height - processTextRect.height;
      const heightDiff2 = 120 + processTextRect.height;
      
      ScrollTrigger.create({
        trigger: processCard,
        start: "top 20%",
        end: `+=${heightDiff}`,
        pin: processText,
        scrub: true,
      });

      cards.forEach((card, index) => {

        const y = index*10
        
        ScrollTrigger.create({
          trigger: card,
          start: `top 20%+=${y}`,
          endTrigger: containerRef.current,
          end: `bottom 20%+=${heightDiff2}`,    
          pin: true,
          scrub: true,
        });

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
    <main ref={containerRef} className='min-h-screen w-full pt-20 pb-30 px-48 '>
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
          <div className="card-process flex w-full h-60 rounded-4xl overflow-hidden border border-gray-300 bg-white">
            {/* Left: Image + Number */}
            <div className="w-1/2 relative bg-primary/40">
              {/* <Image
                  src="/assets/orangepic.jpg"
                  alt="idea"
                  fill
                  className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-7xl font-bold drop-shadow-lg font-kaushan-script-regular mr-5">01</span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-2/3 flex flex-col gap-2 p-8 justify-center">
              <b className="text-[40px] font-semibold w-fit">DISCOVERY</b>
              <p className="">ทำความเข้าใจกลุ่มเป้าหมาย และสิ่งที่คุณอยากให้เว็บไซต์สื่อออกมา</p>
            </div>
          </div>

          <div className="card-process flex w-full h-60 rounded-4xl overflow-hidden border border-gray-300 bg-white">
            {/* Left: Image + Number */}
            <div className="w-1/2 relative bg-primary/60">
              {/* <Image
              src="/your-image.jpg"
              alt="idea"
              className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-7xl font-bold drop-shadow-lg font-kaushan-script-regular mr-5">02</span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-2/3 flex flex-col gap-2 p-8 justify-center">
              <b className="text-[40px] font-semibold w-fit">DESIGN</b>
              <p className=""> ออกแบบประสบการณ์ที่ใช้งานง่าย น่าจดจำ และสื่อสารตัวตนของคุณได้อย่างชัดเจน</p>
            </div>
          </div>

          <div className="card-process flex w-full h-60 rounded-4xl overflow-hidden border border-gray-300 bg-white">
            {/* Left: Image + Number */}
            <div className="w-1/2 relative bg-primary/80">
              {/* <Image
              src="/your-image.jpg"
              alt="idea"
              className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-7xl font-bold drop-shadow-lg font-kaushan-script-regular mr-5">03</span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-2/3 flex flex-col gap-2 p-8 justify-center">
              <b className="text-[40px] font-semibold w-fit">DEVELOP</b>
              <p className="">พัฒนาเว็บไซต์ด้วยเทคโนโลยีที่ทันสมัย พร้อมความใส่ใจในรายละเอียด</p>
            </div>
          </div>

          <div className="card-process flex w-full h-60 rounded-4xl overflow-hidden border border-gray-300 bg-white">
            {/* Left: Image + Number */}
            <div className="w-1/2 relative bg-primary">
              {/* <Image mr-5
              src="/your-image.jpg"
              alt="idea"
              className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-kaushan-script-regular text-7xl font-bold drop-shadow-lg mr-5">04</span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-2/3 flex flex-col gap-2 p-8 justify-center">
              <b className="text-[40px] font-semibold w-fit">DELIVER</b>
              <p className="">ส่งมอบผลงานคุณภาพ พร้อมสนับสนุนการเปิดตัวและการเติบโตของคุณ</p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default Process
