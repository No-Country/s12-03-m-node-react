import React from "react";
import allpost from "./allPost.json";

import image2 from "./images/image2.webp";
import image3 from "./images/image3.webp";
import PreviewPost from "./PreviewPost";

function AllPost(props) {
  const filterdPost = allpost.filter((post) => post.outstanding == false);
  const images = [image2, image3];

  return (
    <section className=" flex flex-col px-24">
      <h5 className=" text-letra text-lg font-bold mt-7 mb-8 md:text-3xl">Todos los posts</h5>

      {filterdPost.map((post, index) => (
        <PreviewPost
          image={images[index % images.length]}
          title={post.title}
          author={post.author}
          date={post.date}
          previewText={post.previewText}
          key={index}
        />
      ))}
    </section>
  );
}

export default AllPost;
