'use client'
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

interface Review {
  name: string;
  accountName: string;
  profile: string;
  comment: string;
}

interface Props {
  sliceStart?: number;
  sliceEnd: number;
  speed: number;
  startPercent?: number;
}

const ReviewScroll = ({
  sliceStart = 0,
  sliceEnd,
  speed,
  startPercent = 0
}: Props) => {

    const reviews: Review[] = [
        {
            name: "Alice Johnson",
            accountName: "@alice_j",
            profile: "https://i.pravatar.cc/150?img=1",
            comment: "The website looks super professional!"
        },
        {
            name: "Mark Peterson",
            accountName: "@markpet",
            profile: "https://i.pravatar.cc/150?img=2",
            comment: "Fast delivery and exactly what I wanted 👍"
        },
        {
            name: "Samantha Lee",
            accountName: "@samlee_",
            profile: "https://i.pravatar.cc/150?img=3",
            comment: "They refined every detail until it was perfect."
        },
        {
            name: "John Doe",
            accountName: "@johnnydoe",
            profile: "https://i.pravatar.cc/150?img=4",
            comment: "The website loads so fast and looks amazing!"
        },
        {
            name: "Rachel Green",
            accountName: "@rachel.g",
            profile: "https://i.pravatar.cc/150?img=5",
            comment: "Great consultation and professional service."
        },
        {
            name: "Michael Chen",
            accountName: "@mikechen",
            profile: "https://i.pravatar.cc/150?img=6",
            comment: "The design is modern and sleek."
        },
        {
            name: "Laura Smith",
            accountName: "@laura_s",
            profile: "https://i.pravatar.cc/150?img=7",
            comment: "Delivered exactly on time. Impressive!"
        },
        {
            name: "Kevin Brown",
            accountName: "@kevin.b",
            profile: "https://i.pravatar.cc/150?img=8",
            comment: "The service is definitely worth the price."
        },
        {
            name: "Emily Davis",
            accountName: "@emilyd",
            profile: "https://i.pravatar.cc/150?img=9",
            comment: "My site now looks super professional!"
        },
        {
            name: "Daniel Miller",
            accountName: "@dan.mil",
            profile: "https://i.pravatar.cc/150?img=10",
            comment: "Already recommended them to my friends."
        },
        {
            name: "Jessica Wong",
            accountName: "@jessw",
            profile: "https://i.pravatar.cc/150?img=11",
            comment: "Great post-launch support!"
        },
        {
            name: "Oliver Thomas",
            accountName: "@oliver_t",
            profile: "https://i.pravatar.cc/150?img=12",
            comment: "The website features are exactly what I needed."
        },
        {
            name: "Nina Garcia",
            accountName: "@nina_g",
            profile: "https://i.pravatar.cc/150?img=13",
            comment: "Super easy to work with this team."
        },
        {
            name: "Chris Evans",
            accountName: "@chrisevans",
            profile: "https://i.pravatar.cc/150?img=14",
            comment: "The best web service I’ve tried so far."
        },
        {
            name: "Sophia Taylor",
            accountName: "@sophiat",
            profile: "https://i.pravatar.cc/150?img=15",
            comment: "Excellent design quality and attention to detail."
        },
        {
            name: "Liam Harris",
            accountName: "@liamh",
            profile: "https://i.pravatar.cc/150?img=16",
            comment: "Fast response and smooth communication."
        },
        {
            name: "Ava Martin",
            accountName: "@avamartin",
            profile: "https://i.pravatar.cc/150?img=17",
            comment: "I love the clean, minimal layout they created."
        },
        {
            name: "Ethan White",
            accountName: "@ethanw",
            profile: "https://i.pravatar.cc/150?img=18",
            comment: "They nailed the mobile optimization."
        },
        {
            name: "Mia Lewis",
            accountName: "@mialewis",
            profile: "https://i.pravatar.cc/150?img=19",
            comment: "Totally satisfied with the final result!"
        },
        {
            name: "Noah Walker",
            accountName: "@noah_w",
            profile: "https://i.pravatar.cc/150?img=20",
            comment: "I’ll definitely hire them again."
        }
    ];

  const items = sliceEnd ? reviews.slice(sliceStart, sliceEnd) : reviews;

  const firstSlider = useRef<HTMLDivElement | null>(null);
  const secondSlider = useRef<HTMLDivElement | null>(null);

  const animateDirection = -1;
  
  useEffect(() => {
    let currentPercent = startPercent;
    let frameId: number;

    const animation = () => {
      if (!firstSlider.current || !secondSlider.current) return;

      gsap.set(firstSlider.current, { yPercent: currentPercent });
      gsap.set(secondSlider.current, { yPercent: currentPercent });

      currentPercent += speed * animateDirection;

      if (currentPercent <= -100) {
        currentPercent = 0;
      }

      frameId = requestAnimationFrame(animation);
    };

    frameId = requestAnimationFrame(animation);

    return () => cancelAnimationFrame(frameId);
  }, [speed, startPercent, animateDirection]);

  return (
    <div className='h-full inset-0 flex flex-col overflow-hidden'>
      {Array.from({ length: 2 }).map((_, repeatIndex) => (
        <div
          ref={repeatIndex === 0 ? firstSlider : secondSlider}
          key={repeatIndex}
          className={`slider-${repeatIndex} flex flex-col gap-4`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`${index === 0 ? 'mt-4' : ''} bg-[#1E1F23] rounded-2xl w-full text-white items-center py-6 px-8`}
            >
                <div className='flex items-center gap-3'>
                    <Image
                        src={item.profile} 
                        alt={item.name} 
                        height={48}
                        width={48}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm font-light text-gray-400">{item.accountName}</p>
                    </div>
                </div>
                <p className='mt-6 text-sm font-light'>{item.comment}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReviewScroll;