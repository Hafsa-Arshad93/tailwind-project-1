import React from 'react'
import logo from './assets/tehzeeb.logo.jpg';

 function About() {
  return (
 <section className="text-yellow-600 body-font bg-yellow-600">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
   <img
  src={logo}
  alt="Logo"
  className="inline-block w-25 h-25 mb-8 text-gray-400"
/>

      <p className=" text-3xl text-white">
        At Tehzeeb Furniture & Home Decor, we craft elegant and comfortable furniture 
        designed to bring warmth and sophistication to your home. From living room essentials 
        to timeless decor pieces, each item is carefully made to blend style with functionality. 
        Our mission is to help you redefine your space with quality, comfort, and a touch of Tehzeeb style.
      </p>
      <span className="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6" />
      <h2 className="text-white font-medium title-font tracking-wider text-2xl">
         M.Alam Shahzaib
      </h2>
      <p className="text-white text-xl">Senior Executive Manager</p>
    </div>
  </div>
</section>



  )
}
export default About

