import React from 'react'
import wood1 from "./assets/wood1.jpg";
import wood2 from "./assets/wood2.jpg";
import wood3 from "./assets/wood3.jpg";
import wood4 from "./assets/wood4.jpg";
import wood5 from "./assets/wood5.jpg";
import wood6 from "./assets/wood6.jpg";
import wood7 from "./assets/wood7.jpg";
import wood8 from "./assets/wood8.jpg";



 function BuyProduct() {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      {/* Card 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
        <div/>
        {/* -------------------------------------- */}
         {/* Card 5 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood5}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood6}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      {/* Card 7 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood7}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      {/* Card 8 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="wood furniture"
            className="object-cover object-center w-full h-full block"
            src={wood8}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wood</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}
export default BuyProduct
