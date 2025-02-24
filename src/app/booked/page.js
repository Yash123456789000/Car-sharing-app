import Image from 'next/image'
import React from 'react'


  

const page = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Congratulations!

            <span className="sm:block"> You ride is confirmed </span>
          </h1>

          <div className='flex justify-center'>
            <Image src="/cartoon-car-icon.webp" alt="gif"width={200} height={200}/>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/chat"
            >
              Chat with Driver
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page