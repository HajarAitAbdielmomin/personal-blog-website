import NavigationHeader from "@/app/components/NavigationHeader";
import BlogCard from "@/app/components/BlogCard";
export default function Home() {
    const blogs = [
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
    ];
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

              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                  {blogs.map((blog, index) => (
                      <BlogCard
                          key={index}
                          title={blog.title}
                          desc={blog.desc}
                          image={blog.image}
                      />
                  ))}
              </div>
          </div>

      </div>


  );
}
