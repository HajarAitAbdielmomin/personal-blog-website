"use client";

import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {useEffect, useState} from "react";

import {formatDate} from "@/app/util/util";
import {getBlogs} from "@/app/services/blog_service/blog_service";

import NavigationHeader from "@/app/components/NavigationHeader/NavigationHeader";
import BlogCard from "@/app/components/Card/BlogCard";
import Loader from "@/app/components/Loader/Loader";
import Form from "@/app/components/Contact/Form";
import InfoCards from "@/app/components/Contact/InfoCards";
import Footer from "@/app/components/Footer/Footer";


export default function Home() {

    const [loading, setLoading] = useState(true);

    const [blogs, setBlogs] = useState([]);

    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;

    const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;


    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + cardsPerPage);

    const handleSearch = (query: string) => {

        // Update state and reset to page 1
        setSearchQuery(query);
        setCurrentPage(1);

        // Handle empty search
        if (!query.trim()) {
            setFilteredBlogs(blogs);
            return;
        }

        const filtered = blogs.filter((blog: any) => {
            const searchTerm = query.toLowerCase();

            const title = blog.title.toLowerCase();
            const desc = blog.desc.toLowerCase();
            const date = formatDate(blog.pubDate).toLowerCase();
            
            return title.includes(searchTerm) || 
                   desc.includes(searchTerm) || 
                   date.includes(searchTerm);
        });
        
        setFilteredBlogs(filtered);
    };


    useEffect(() => {
        (async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
                setFilteredBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    if (loading) return <Loader />;

  return (
      <div className="w-full bg-white/70 bg-opacity-40 font-display">
          <NavigationHeader onSearch={handleSearch} searchQuery={searchQuery} />

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
                  {searchQuery && (
                      <div className="mb-4 text-sm text-gray-600">
                          {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} found for "{searchQuery}"
                      </div>
                  )}
                  
                  {filteredBlogs.length > 0 && (
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
                                      : "hover:bg-gray-700 cursor-pointer"
                              }`}
                          >
                              →
                          </button>
                      </div>
                  )}

                  {filteredBlogs.length === 0 ? (
                      <div className="text-center py-12">
                          <p className="text-gray-500 text-lg">No blogs found matching your search.</p>
                      </div>
                  ) : (
                      <AnimatePresence mode="wait">
                          <motion.div
                              key={currentPage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                          >
                              {currentBlogs.map((blog: any, index) => (
                                  <BlogCard
                                      key={index}
                                      title={blog.title}
                                      desc={blog.desc}
                                      image={blog.image}
                                      date={formatDate(blog.pubDate)}
                                      link={blog.link}
                                  />
                              ))}
                          </motion.div>
                      </AnimatePresence>
                  )}

              </div>


              {filteredBlogs.length > 0 && totalPages > 1 && (
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
              )}

          </div>


          <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-28 bg-white/60 items-center text-center">

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                  Get In <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
                  Have thoughts or feedback about my blogs?{" "} Drop me a message
                  I’d love to hear from you.
              </p>

              <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
                  <div className="w-full lg:flex-1">
                      <Form/>
                  </div>

                  <div className="w-full lg:flex-1 flex flex-col gap-5">
                      <InfoCards/>
                  </div>
              </div>
          </section>

          <Footer />
      </div>

  );
}
