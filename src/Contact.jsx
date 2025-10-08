import React from 'react'

function Contact() {
    return (
        <div>
   <section className="text-gray-600 bg-yellow-600 body-font relative border-15 border-dashed border-black">
  <div className="container px-5 py-8 mx-auto flex flex-wrap md:flex-nowrap gap-6">
    
    {/* Map Section */}
    <div className="lg:w-2/3 md:w-2/3 w-full bg-gray-300 rounded-lg border-2 border-zinc-950 overflow-hidden p-6 flex flex-col">
      
      <div className="relative w-full h-94 border-2 border-zinc-950 mb-4 rounded overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Peshawar,+Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
      </div>
      
      <div className="bg-white flex flex-wrap border-2 border-zinc-950 py-4 rounded shadow-md">
        <div className="lg:w-1/2 px-4 ">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1 text-sm">University Road, Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
        </div>
        <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed text-sm">tehzeebfurniture40@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed text-sm">+92-311-9146635</p>
        </div>
      </div>
    </div>

    {/* Feedback Form */}
    <div className="lg:w-1/3 md:w-1/3 w-full bg-zinc-400 border-2 border-zinc-950 flex flex-col md:ml-auto p-6">
      <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Send Us Your Feedback</h2>
      <p className="leading-relaxed mb-4 text-stone-950 text-lg">
        We’d love to hear your thoughts! Share your experience with our products or website.
      </p>

      <div className="relative mb-3">
        <label htmlFor="name" className="leading-7 text-base text-stone-950">Name</label>
        <input type="text" id="name" name="name" placeholder="Your full name" className="w-full bg-white border-2 border-zinc-950 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out" />
      </div>

      <div className="relative mb-3">
        <label htmlFor="email" className="leading-7 text-base text-stone-950">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email address" className="w-full bg-white border-2 border-zinc-950 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out" />
      </div>

      <div className="relative mb-3">
        <label htmlFor="message" className="leading-7 text-base text-stone-950">Message</label>
        <textarea id="message" name="message" placeholder="Type your message here..." className="w-full bg-white  border-2 border-zinc-950 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>

      <button className="text-white bg-zinc-600 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 rounded border-2 border-zinc-950 text-lg mb-2">Submit</button>
      <p className="text-sm text-stone-950 mt-1">Your feedback helps us improve and serve you better!</p>
    </div>
  </div>
</section>

        </div>
    )
}
export default Contact
