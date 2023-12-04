import React from "react";
import FeaturedPost from "./FeaturedPost";
import Footer from "../../ui/Footer";

function Blog() {
  return (
    < div className=" h-screen w-full">
      <main className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat flex justify-center flex-col'>
        <FeaturedPost />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
