'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Qoutes = () => {

  useGSAP(() => {

    const textSplit = SplitText.create('.qoutes-message', {
      type: "words",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".qoutes-section",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      }
    })

    tl.to(textSplit.words, {
      color: "#171717",
      ease: "power1.in",
      stagger: 1,
    })  

  })

  return (
    <div className='qoutes-section min-h-screen bg-[#E9F0FE] flex justify-center items-center px-24'>
      <b className='qoutes-message text-center text-8xl text-primary/20'>
        We build websites
        <br/>people can&apos;t ignore.
      </b>
    </div>
  )
}

export default Qoutes
