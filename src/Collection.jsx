import React from "react";
import galleryImage1 from "./assets/galleryimg1.jpg";
import galleryImage2 from "./assets/galleryimg2.jpg";
import galleryImage3 from "./assets/galleryimg3.jpg";
import galleryImage4 from "./assets/galleryimg4.jpg";
import galleryImage5 from "./assets/galleryimg5.jpg";
import galleryImage6 from "./assets/galleryimg6.jpg";

function Collection() {

  return (
< section className="text-white bg-yellow-600 body-font">
  <div className="container px-5 py-8 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-basesm:text-3xl text-2xl font-medium title-font text-white text-4xl lg:w-1/3 lg:mb-0 mb-4">
        Welcome to Tehzeeb Furniture.
        We deal in all kind of Furniture, Contact us for more Designs!!
      </h1>

    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">

        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-[300px] object-center block rounded-2xl"
            src={galleryImage1}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-[301px] object-center block rounded-2xl"
            src={galleryImage2}
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-[360px] object-cover object-center block rounded-2xl"
            src={galleryImage3}
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-[361px] object-cover object-center block rounded-2xl"
            src={galleryImage4}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-[302px] object-center block rounded-2xl"
            src={galleryImage5}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-[303px] object-center block rounded-2xl"
            src={galleryImage6}
          />
        </div>
      </div>
    </div>
  </div>
</section>

    
  )
}
export default Collection