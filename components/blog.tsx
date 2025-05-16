import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="bg-black text-white text-4xl font-bold text-center my-4 py-10 border-b-4 border-myred pb-3 w-fit mx-auto">
          MY BLOGS
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto">
          Explore stories that inspire and provoke thought
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Blog 1 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog1">
              BLOG 1: BEAT YOUR YESTERDAY
            </a>
          </h2>
          <div className="w-full h-64 relative mt-4">
            <Image
              src="/assets/images/ebook.jpg"
              alt="Blog 1 Image"
              fill
              className="rounded-md object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-myred mt-4">
           A Wake-Up Call for the Dreamers, the Fighters, 
           and the Broken:
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
           With the wisdom of a mentor, the warmth of a brother, and the 
           grit of someone who's lived through it all, Dr. D shares stories 
           that span continents and seasons rising from rural Kenya to American 
           lecture halls, from childhood wounds 
           to adult awakenings. Through every chapter, one message remains....
          </p>
          <a
            href="/detailblog/blog1"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More →
          </a>
        </div>

        {/* Blog 2 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog2">
              BLOG 2: ROCK ON
            </a>
          </h2>
          <div className="w-full h-64 relative mt-4">
            <Image
              src="/assets/images/mockup-rockon.png"
              alt="Blog 2 Image"
              fill
              className="rounded-md object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-myred mt-4">
            A Joyful Tribute to Family, Creativity, and the 
            Power of Bonding Through Books:
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
            What began as a fun experiment turned into a heartfelt legacy.
            This book isn't about perfection, it's about presence. It's about
            a dad who turned screen time into dream time. And in doing so, he
            gave his daughter the tools to express herself, 
            create art, and proudly say: "I helped make that!"....
          </p>
          <a
            href="/detailblog/blog2"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;




// import React from "react";
// import Image from "next/image";

// const Blog = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-8 sm:mb-12">
//         <h2 className="bg-black text-white text-4xl font-bold text-center my-4 py-10 border-b-4 border-myred pb-3 w-fit mx-auto">
//           MY BLOGS
//         </h2>
//         <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto">
//           Explore stories that inspire and provoke thought
//         </p>
//       </div>
//       <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
//         {/* Blog 1 */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
//           <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
//             <a href="/detailblog/blog1">
//               BLOG 1: BEAT YOUR YESTERDAY
//             </a>
//           </h2>
//           <div className="w-full max-w-full h-auto mt-4">
//             <Image
//               src="/assets/images/ebook.jpg"
//               alt="Blog 1 Image"
//               width={100}
//               height={100}
//                layout="responsive"
//               // objectFit="scale-down"
//                className="rounded-md"
//             />
//           </div>
//           <h3 className="text-lg font-semibold text-myred mt-4">
//            A Wake-Up Call for the Dreamers, the Fighters, 
//            and the Broken:
//           </h3>
//           <p className="text-gray-600 mt-2 flex-grow">
//            With the wisdom of a mentor, the warmth of a brother, and the 
//            grit of someone who’s lived through it all, Dr. D shares stories 
//            that span continents and seasons rising from rural Kenya to American 
//            lecture halls, from childhood wounds 
//            to adult awakenings. Through every chapter, one message remains....
//           </p>
//           <a
//             href="/detailblog/blog1"
//             className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
//           >
//             Read More →
//           </a>
//         </div>

//         {/* Blog 2 */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
//           <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
//             <a href="/detailblog/blog2">
//               BLOG 2: ROCK ON
//             </a>
//           </h2>
//           <div className="w-full max-w-full h-auto mt-4">
//             <Image
//               src="/assets/images/mockup-rockon.png"
//               alt="Blog 2 Image"
//               width={100}
//               height={100}
//               layout="responsive"
//             // objectFit="scale-down"
//               className="rounded-md"
//             />
//           </div>
//           <h3 className="text-lg font-semibold text-myred mt-4">
//             A Joyful Tribute to Family, Creativity, and the 
//             Power of Bonding Through Books:
//           </h3>
//           <p className="text-gray-600 mt-2 flex-grow">
//             What began as a fun experiment turned into a heartfelt legacy.
//             This book isn’t about perfection, it’s about presence. It’s about
//             a dad who turned screen time into dream time. And in doing so, he
//             gave his daughter the tools to express herself, 
//             create art, and proudly say: “I helped make that!”....
//           </p>
//           <a
//             href="/detailblog/blog2"
//             className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
//           >
//             Read More →
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Blog;