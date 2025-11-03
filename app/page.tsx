"use client";

import NavigationHeader from "@/app/components/NavigationHeader";
import BlogCard from "@/app/components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useState} from "react";
export default function Home() {
    const blogs = [
        {
            title: "Materials for Your Next Construction Project",
            desc: "Discover the benefits of using sustainable options. Learn how these materials contribute to energy efficiency.",
            image: "/Dystonia-4.jpg",
        },
        {
            title: "What to Expect During a Construction Project",
            desc: "Embarking on a construction project can be a complex and multifaceted process.",
            image: "/logging-api.jpg",
        },
        {
            title: "The Crucial Role of Project Management in Construction Success.",
            desc: "This blog delves into the critical role project management plays in the construction industry.",
            image: "/java-threads2.jpg",
        },
        {
            title: "Materials for Your Next Construction Project",
            desc: "Discover the benefits of using sustainable options. Learn how these materials contribute to energy efficiency.",
            image: "/Dystonia-4.jpg",
        },
        {
            title: "What to Expect During a Construction Project",
            desc: "Embarking on a construction project can be a complex and multifaceted process.",
            image: "/logging-api.jpg",
        },
        {
            title: "Materials for Your Next Construction Project",
            desc: "Discover the benefits of using sustainable options. Learn how these materials contribute to energy efficiency.",
            image: "/Dystonia-4.jpg",
        },
        {
            title: "What to Expect During a Construction Project",
            desc: "Embarking on a construction project can be a complex and multifaceted process.",
            image: "/logging-api.jpg",
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;

    const totalPages = Math.ceil(blogs.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + cardsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  return (
      <div className="w-full bg-white/70 bg-opacity-40 font-display">
          <NavigationHeader/>

          <div
              className="h-full min-h-screen w-full container mx-auto py-10 px-6 flex flex-col items-center text-center gap-6">

              <h1 className="text-4xl md:text-5xl font-bold">
                  Our recent blogs
              </h1>

              <p className="max-w-5xl text-gray-400 text-base md:text-lg leading-relaxed">
                  Explore insights, reflections, and stories blending technology, creativity, and life.
                  Each post is written with care to inspire curiosity and spark thoughtful discussions.
              </p>

              <div className="w-full max-w-6xl">
                  <div className="flex justify-end gap-3 mb-6">
                      <button
                          onClick={handlePrev}
                          disabled={currentPage === 1}
                          className={`p-2 border rounded-md transition ${
                              currentPage === 1
                                  ? "opacity-40 cursor-not-allowed"
                                  : "hover:bg-gray-100 cursor-pointer"
                          }`}
                      >
                          ←
                      </button>
                      <button
                          onClick={handleNext}
                          disabled={currentPage === totalPages}
                          className={`p-2 border rounded-md bg-gray-900 text-white transition ${
                              currentPage === totalPages
                                  ? "opacity-40 cursor-not-allowed"
                                  : "hover:bg-gray-800 cursor-pointer"
                          }`}
                      >
                          →
                      </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentBlogs.map((blog, index) => (
                          <BlogCard
                              key={index}
                              title={blog.title}
                              desc={blog.desc}
                              image={blog.image}
                          />
                      ))}
                  </div>
              </div>


              <div className="flex items-center justify-center gap-2 mt-10">
                  {Array.from({length: totalPages}, (_, i) => (
                      <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-2.5 h-2.5 rounded-full ${
                              currentPage === i + 1 ? "bg-gray-800" : "bg-gray-300"
                          }`}
                      ></button>
                  ))}
              </div>

          </div>
      </div>

  );
}
