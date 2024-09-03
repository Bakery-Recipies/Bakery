// src/HomePage.jsx
import React from 'react';
import backgroundImage from './assets/black.jpg'; // Make sure the path matches your file structure


const ShapeDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden  leading-[0]">
      <svg
        className="relative block w-[calc(282%+1.3px)] h-[200px] "
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-white"
        ></path>
      </svg>
    </div>
  );
};

const Home = () => {
    return (
      <div className="container">
        <div className="relative min-h-screen bg-[#c98d83]">
          <header className="text-white p-6 text-center">
            <nav className="border-gray-200 dark:bg-white">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                  href="https://flowbite.com/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                ></a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-amber-900 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Recipies
                      </a>
                    </li>
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                     <img src="../src/assets/image.png" alt=""className='w-[100px]' />
                    </span>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Reach Out
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Who We Are
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
  
          <main className="p-10 flex flex-col items-center">
         
            <ShapeDivider />
            <img
              src="../src/assets/8dcd2937317f1f248e3c9e4975c96c2b-removebg-preview.png" // Replace with your image path
              alt="Decorative"
              className="-mb-44 mt-22 max-w-full h-auto rounded "
            />
           
          </main>
        </div>
        <p class="text-center text-amber-900  max-w-lg mx-auto leading-relaxed font-serif font-bold mb-16">
  Experience the art of artisanal bread with our daily handcrafted loaves. Crafted with care and premium ingredients, each loaf delivers unmatched quality and flavor. Enjoy freshly baked excellence in every slice.
</p>
<section className="">
  <div
    className="relative w-screen h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-white text-4xl text-center font-serif italic font-semibold mb-12 mt-20">
        learn about the history <p><span className="text-[#FFC4C4]">of baking</span></p> 
      </p>
      
      {/* Grid layout with 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-24">
        {/* Column 1 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">3000 BC</h3>
          <p className="text-gray-200">
            The Birth of Bread:<p>Ancient Egyptians bake the earliest known leavened bread, using natural fermentation.</p>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>

        {/* Column 2 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">1800 AD</h3>
          <p className="text-gray-200">
            Industrial Baking Begins: <p>The invention of commercial yeast and mechanized milling transforms bread production and accessibility.</p>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className=" max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>

        {/* Column 3 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center relative">
          <h3 className="text-xl font-semibold mb-2">1800 AD</h3>
          <p className="text-gray-200 mb-4">
            Industrial Baking Begins:<br />
            The invention of commercial yeast and mechanized milling transforms bread production and accessibility.
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mx-auto mt-52"
          />
        </div>

        {/* Column 4 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">2000 AD</h3>
          <p className="text-gray-200 m-0">
            Artisanal Revival: <span className="m-0">A resurgence of artisanal baking celebrates traditional methods, quality ingredients, and the rich heritage of bread-making.</span>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section className='mt-[230px]'>
    <div>
        <p className='text-center text-[#FFC4C4] text-5xl  max-w-lg mx-auto leading-relaxed'>What we Produce?</p>
        <p className="text-center text-amber-900 text-2xl  max-w-lg mx-auto leading-relaxed font-serif font-bold">
        Meet our original products<p>made</p> 
       <p>with love</p></p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 w-[850px] mx-auto ">
      {/* Column 1 */}
      <div className="bg-white p-4 rounded text-center">
      <img
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
    className="mb-0 mt-24 max-w-[280px] h-[210px] rounded  mx-auto"
  />
        <h3 className="text-xl font-semibold mb-2">Wheat cookies</h3>
        <p className="text-gray-700 w-[300px] mx-auto">
        Duis vehicula, enim vel fermentum porta, augue enim
ullamcorper metus, vel pellentesque libero est sit amet
velit. Nullam sit amet velit dictum, vehicula purus ac,
posuere nibh. Proin maximus maximus odio.
        </p> <button class="bg-amber-900 h-12 w-30 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
  Show info
</button>
       
      </div>
     

      {/* Column 2 */}
      <div className="bg-white p-4 rounded  text-center ">
      <img
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
    className="mb-0 mt-24 max-w-[250px] h-[210px] rounded  mx-auto"
  />
        <h3 className="text-xl font-semibold mb-2">Sesame cookies</h3>
        <p className="text-gray-700 w-[300px] mx-auto">
        Stet clita kasd gubergren, no sea takimata sanctus est
Lorem ipsum dolor sit amet. Duis autem vel eum iriure
dolor in hendrerit in vulputate velit esse molestie
consequat accumsan et iusto odio dignissim.
        </p>
        <button class="bg-amber-900 h-12 w-30 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
        Show info
</button>
      </div>
      
</div>
</section>

<section>
    <div>
    <img
              src="../src/assets/Background.png" // Replace with your image path
              alt="Decorative"
              className="-mb-44 mt-22 w-screen max-w-full h-auto rounded "
            />
           
            {/* <p className=' text-amber-950 text-4xl text-center font-serif italic font-semibold mx-auto my-auto mb'>Our speciality - <p>traditional</p>

donuts!</p>
<p class="text-center text-amber-900  max-w-lg mx-auto leading-relaxed font-serif font-bold mb-16">Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh,
tincidunt ut eros a, vulputate consequat odio.</p> */}
    </div>
</section>
<section>
<footer className="w-full py-14 mt-36">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
        <img
          alt="Logo"
          className="w-[100px] mx-auto"
          src="../src/assets/image2-removebg-preview (1).png"
        />
      </span>
      <div className="flex space-x-10 justify-center items-center mb-14">
        {`        {/* First Icon Link */}        `}
        <a
          className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
          href="#"
        >
          <svg
            className="w-[1.688rem] h-[1.688rem]"
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
              fill="currentColor"
            />
          </svg>
        </a>
        {`        {/* Second Icon Link */}        `}
        <a
          className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
          href="#"
        >
          <svg
            className="w-[1.688rem] h-[1.688rem]"
            fill="none"
            viewBox="0 0 29 29"
            xmlns="http://www.w3.org/2000/svg"
          >
            
          </svg>
        </a>
      </div>
      <p className="text-center text-sm text-gray-500">
        © 2024 Your Company Name. All rights reserved.
      </p>
    </div>
  </div>
</footer>


</section>

      </div>
      
    );
  };
  
  export default Home;
  


