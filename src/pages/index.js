import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quantumix</title>
        <link rel="icon" href="/favicon.ico" />
        {/* ... other head elements ... */}
      </Head>

      <Header />
    <div className='bg-black text-white custom-font-regular'>
      <section className="carousel-section px-10 pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/image 1.png')" }}>
        {/* Background image is placed here */}
        <span className="sr-only">Architectural design concept showcasing a modern building interior by 3D Designers at Quantumix</span>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/100 via-black/60 to-transparent"></div>

      <div className="relative z-20">
        <p className="text-xl custom-font-medium" style={{ marginTop: "480px" }}>
          #3D Designers at Quantumix
        </p>
        <h1 className="text-4xl custom-font-bold mt-5">
          By designing a building from the inside-out as much as from the outside-in, we inculcate a sense of continuity and connection to the wider world.
        </h1>
        <div className="flex justify-center space-x-2 mt-4">
          <span className="custom-carousel-dot active"></span>
          <span className="custom-carousel-dot"></span>
          <span className="custom-carousel-dot"></span>
          <span className="custom-carousel-dot"></span>
        </div>
      </div>
    </section>


    <section class="uiux-designing-section bg-gray-800 py-20 px-10">
        <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col space-y-5">
                    <h2 class="text-4xl custom-font-bold">UI/UX Designing</h2>
                    <p class="text-lg custom-font-medium">
                        At the heart of our design philosophy is a commitment to user-centricity. We meticulously study your target audience, ensuring that every element we craft enhances the overall user experience. Our designs seamlessly align with user needs satisfaction and engagement.
                    </p>
                    <a href="#" class="custom-font-medium text-blue-400 hover:text-blue-500 transition-colors duration-300">Learn More</a>
                </div>
                <div>
                    <img src="https://placehold.co/600x400" alt="User interface design concept with screens and design elements" class="w-full h-auto" />
                </div>
            </div>
        </div>
    </section>

    <section class="services-section px-10 py-20 grid grid-cols-3 gap-10">
        <div class="service-card bg-gray-800 p-10">
            <h3 class="text-3xl custom-font-bold mb-5">Web Development</h3>
            <p class="text-lg custom-font-medium mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img src="https://s3-alpha-sig.figma.com/img/fab3/8f53/9a83a7e0951899b0bcbc34301896e472?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adJhYoFv5BRFLG6dCT0q3g6ehSwOp-~lDSfSZeS5jT~jsD4lc7Tj~Q4v~cHr1C2EEwaw-7S3FUHsk9PhO~Ru1Ic4GnOHwFI78Po4m99HZtjpcj0XggVcPRRuvXiC8mvlDiTdC2YqAzWHb421gDq9~SMD~VMSi43B1E1Pa8p92cDn5degThuj76PdWuQBF3bFCFV66Ua2nKo7vRPezBQhsyn88QPXAnKfn2vbGH~rU6y7-uBufYkQJ1M1YUQo5WM-ykfsDRmf9tAemSnhd7D9ODikk0x0PH0DDjdpiHXIoW3RU8sIdWSalVlznD7YwH2LVdEimoA0kdz1nhtaTe~cmQ__" alt="Web development concept with code on a screen" class="w-full h-auto"/>
        </div>
        {/* <!-- Repeat for other service cards --> */}
    </section>

    <section class="brands-section px-10 py-20">
        <h2 class="text-4xl custom-font-bold mb-10">Top Brands that worked with Us</h2>
        <div class="flex space-x-10 justify-center">
            {/* <!-- Brand logos here --> */}
            <img src="https://placehold.co/100x50" alt="Jio logo" class="h-12"/>
            <img src="https://placehold.co/100x50" alt="Airtel logo" class="h-12"/>
            <img src="https://placehold.co/100x50" alt="Adani Electricity logo" class="h-12"/>
            <img src="https://placehold.co/100x50" alt="Zomat logo" class="h-12"/>
        </div>
    </section>

    <section class="world-map-section bg-gray-800 px-10 py-20">
        <h2 class="text-4xl custom-font-bold mb-10">Focused to deliver technology in</h2>
        <p class="text-lg custom-font-medium mb-10">
            We are thrilled to announce our ambitious plan to extend our services to foreign countries, marking a significant milestone in our journey of growth and innovation.
        </p>
        <div class="flex justify-center space-x-5">
            <span class="custom-carousel-dot active"></span>
            <span class="custom-carousel-dot"></span>
            <span class="custom-carousel-dot"></span>
            <span class="custom-carousel-dot"></span>
        </div>
        {/* <!-- Map image here --> */}
        <img src="https://placehold.co/900x500" alt="World map showing the global reach of Quantumix" class="w-full h-auto mt-10"/>
    </section>

    <section class="testimonials-section px-10 py-20">
        <h2 class="text-4xl custom-font-bold mb-10">What Our Users Are Saying</h2>
        <div class="grid grid-cols-2 gap-10">
            {/* <!-- Testimonials here --> */}
        </div>
    </section>

      <Footer />
      </div>
    </div>
  );
}
