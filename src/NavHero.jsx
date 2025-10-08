import React from 'react';
import tehzeebLogo from './assets/tehzeeb.logo.jpg';
import backgroundImage from './assets/bgimage.jpg';

function NavHero() {

  return (

    <div className='border-15 border-dashed border-yellow-600'>
      <header className="text-gray-400 bg-yellow-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src={tehzeebLogo}
              alt="Tehzeeb Logo"
              className="w-16 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white rounded-none object-cover full"
            />

            <span className="ml-3 text-2xl">Tehzeeb Furniture & Home Decor</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-yellow-900 text-2xl hover:text-yellow-500">Home</a>
            <a className="mr-5 text-yellow-900 text-2xl hover:text-yellow-500"> About Us</a>
            <a className="mr-5 text-yellow-900 text-2xl hover:text-yellow-500"> Collections</a>
            <a className="mr-5 text-yellow-900 text-2xl hover:text-yellow-500">  Buy Products</a>
            <a className="mr-5 text-yellow-900 text-2xl hover:text-yellow-500"> Contact Us</a>

          </nav>

        </div>
      </header>

      <section className="text-gray-400 bg-white-300 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded-3xl w-full h-[400px]"
              alt="hero"
              src={backgroundImage}
            />

          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-yellow-600">
              Tehzeeb Furniture & Home Decor
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-amber-600">
              Discover elegant and comfortable furniture crafted to bring warmth and
              sophistication to your home. From living room essentials to timeless
              decor — redefine your space with Tehzeeb’s touch of style.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">
                Explore Collection
              </button>
              <button className="ml-4 inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 hover:text-yellow rounded text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavHero 