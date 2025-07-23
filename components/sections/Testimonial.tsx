'use client'
import ReviewScroll from '../common/ReviewScroll';

const Testimonial = () => {

    return (
        <main className='mt-[-60] h-[90dvh] w-full bg-[#171717] p-8 relative z-[9999]'>
            <div className='absolute top-0 w-full h-full shadow-testimonial pointer-events-none z-50'></div>
            <section className='grid grid-cols-3 gap-4 h-full px-56'>
                <ReviewScroll sliceStart={0} sliceEnd={5} speed={0.03} startPercent={5}/>
                <ReviewScroll sliceStart={6} sliceEnd={10} speed={0.04}/>
                <ReviewScroll sliceStart={11} sliceEnd={15} speed={0.03}/>
            </section>
        </main>
    )
}

export default Testimonial
