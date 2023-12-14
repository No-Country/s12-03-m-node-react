/* eslint-disable no-unused-vars */
import React from "react";
import FeaturedPost from "./FeaturedPost";
import AllPost from "./AllPost.jsx";

function Blog() {
  return (
    <div className="  w-full">
      <main className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat flex justify-center flex-col'>
        <FeaturedPost />
        <AllPost />
      </main>
    </div>
  );
}

export default Blog;
