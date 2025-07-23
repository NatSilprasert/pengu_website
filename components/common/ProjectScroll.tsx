'use client'
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

interface Projects {
  name: string;
  company: string;
  profile: string;
  picture: string;
}


const ProjectScroll = () => {

    const projects: Projects[] = [
        {
            name: "Modern E-Commerce Website",
            company: "UrbanStyle Co.",
            profile: "https://i.pravatar.cc/150?img=20",
            picture: ""
        },
        {
            name: "Portfolio Showcase Design",
            company: "Creative Minds Studio",
            profile: "https://i.pravatar.cc/150?img=20",
            picture: ""
        },
        {
            name: "Luxury Hotel Booking Platform",
            company: "Grand Horizon Hotel",
            profile: "https://i.pravatar.cc/150?img=20",
            picture: ""
        },
        {
            name: "Tech Startup Landing Page",
            company: "NextGen Labs",
            profile: "https://i.pravatar.cc/150?img=20",
            picture: ""
        },
        {
            name: "Restaurant Reservation System",
            company: "Foodie Haven",
            profile: "https://i.pravatar.cc/150?img=20",
            picture: ""
        }
    ];

    const firstSlider = useRef<HTMLDivElement | null>(null);
    const secondSlider = useRef<HTMLDivElement | null>(null);

    let currentPercent = 0;
    const animateDirection = -1;

    useEffect(() => {
        let frameId: number;

        const animation = () => {
        if (!firstSlider.current || !secondSlider.current) return;

        gsap.set(firstSlider.current, { xPercent: currentPercent });
        gsap.set(secondSlider.current, { xPercent: currentPercent });

        currentPercent += 0.015 * animateDirection;

        if (currentPercent <= -100) {
            currentPercent = 0;
        }

        frameId = requestAnimationFrame(animation);
        };

        frameId = requestAnimationFrame(animation);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className='w-full h-full inset-0 flex overflow-hidden'>
        {Array.from({ length: 2 }).map((_, repeatIndex) => (
            <div
            ref={repeatIndex === 0 ? firstSlider : secondSlider}
            key={repeatIndex}
            className={`slider-${repeatIndex} flex gap-4`}
            >
            {projects.map((item, index) => (
                <div
                key={index}
                className={`${index === 0 ? 'mx-4' : ''} bg-primary p-10 rounded-4xl w-120 h-140 flex flex-col justify-between`}
                >
                    <div className='inset-0 h-full flex items-center justify-center'>
                            <Image 
                                src='/assets/gtav.png'
                                alt={item.name} 
                                height={300}
                                width={350}
                            />
                    </div>
                    <div className='flex gap-3'>
                        <Image
                            src={item.profile} 
                            alt={item.name} 
                            height={48}
                            width={48}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <b>{item.name}</b>
                            <p>{item.company}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        ))}
        </div>
    );
};

export default ProjectScroll;