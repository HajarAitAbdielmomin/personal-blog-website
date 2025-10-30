import NavigationHeader from "@/app/components/NavigationHeader";
export default function Home() {
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
          </div>
      </div>


  );
}
