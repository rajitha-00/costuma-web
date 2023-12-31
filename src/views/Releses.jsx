import React from 'react'

const Releses = () => {
  return (
    <>
      <section id="releases" className='mt-36 pb-20'>
        <h1 className='text-center text-3xl md:text-8xl font-bold '>
          Releases
        </h1>
        <div className="w-[85%] mx-auto ">

          <div className="textContainer px-3 lg:px-12">
            <h3 className='text-md font-semibold text-[#614AD3] mt-10 md:mt-20 text-xl'>Last Release</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
            <div className="cardContainer text-center border-r mt-5 md:border-r-2">
              <h1 className='lg:text-2xl text-xl font-semibold'>Instant Design Generation</h1>
              <p className='text-[#614AD3] mt-5 px-3 lg:px-12'>Experience the future of costume design with instant AI-powered generation. Unleash your creativity, and see your ideas come to life at the speed of thought.</p>
            </div>
            <div className="cardContainer text-center border-r  mt-5 md:border-r-2">
              <h1 className='lg:text-2xl text-xl font-semibold'>Stable Diffusion LORA</h1>
              <p className='text-[#614AD3]  mt-5 px-3 lg:px-12'>Our cutting-edge technology, Stable Diffusion LORA, ensures stability in every design. No compromises, just consistently stunning costumes.</p>
            </div>
            <div className="cardContainer text-center border-r  mt-5 md:border-r-2">
              <h1 className='lg:text-2xl text-xl font-semibold'>Save Time & Money</h1>
              <p className='text-[#614AD3]  mt-5 px-3 lg:px-12'>Say goodbye to endless hours of costume planning and costly design iterations. With Costuma, you save both time and money, making costume creation more accessible than ever.</p>
            </div>
            <div className="cardContainer text-center  mt-5 ">
              <h1 className='lg:text-2xl text-xl font-semibold'>Unlimited Designs</h1>
              <p className='text-[#614AD3]  mt-5 px-3 lg:px-12'>There are no limits to your creativity. Explore an endless array of costume designs, and let your imagination run wild.</p>
            </div>
          </div>

          <div className="textContainer px-3 lg:px-12">
            <h3 className='text-md font-semibold text-[#614AD3] mt-20 text-xl'>Next Release</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
            <div className="cardContainer text-center border-r  mt-5 md:border-r-2">
              <h1 className='lg:text-2xl text-xl font-semibold'>Instant Design Generation</h1>
              <p className='text-[#614AD3] mt-5 px-3 lg:px-12'>Experience the future of costume design with instant AI-powered generation. Unleash your creativity, and see your ideas come to life at the speed of thought.</p>
            </div>
            <div className="cardContainer text-center border-r  mt-5 md:border-r-2">
              <h1 className='lg:text-2xl text-xl font-semibold'>Stable Diffusion LORA </h1>
              <p className='text-[#614AD3]  mt-5 px-3 lg:px-12'>Our cutting-edge technology, Stable Diffusion LORA, ensures stability in every design. No compromises, just consistently stunning costumes.</p>
            </div>
            <div className="cardContainer text-center  mt-5 ">
              <h1 className='lg:text-2xl text-xl font-semibold'>Save Time & Money</h1>
              <p className='text-[#614AD3]  mt-5 px-3 lg:px-12'>Say goodbye to endless hours of costume planning and costly design iterations. With Costuma, you save both time and money, making costume creation more accessible than ever.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Releses
