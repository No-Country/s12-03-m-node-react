/* eslint-disable no-unused-vars */
import React from "react";
import FeaturedPost from "./FeaturedPost";
import AllPost from "./AllPost.jsx";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <>
    <Helmet>
        <title>Blog | Rastrea Patitas</title>
    </Helmet>
    <div className="  w-full">
      <main className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat flex justify-center flex-col'>
        <FeaturedPost />
        <AllPost />
      </main>
    </div> 
    </>
  );
}

export default Blog;
