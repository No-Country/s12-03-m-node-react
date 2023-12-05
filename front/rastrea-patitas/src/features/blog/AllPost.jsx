import React from "react";
import allpost from "./allPost.json";

import image2 from "./images/image2.webp";
import image3 from "./images/image3.webp";
import CardPreviewPost from "./cardPreviewPost";

function AllPost(props) {
  const filterdPost = allpost.filter((post) => post.outstanding == false);
  const images = [image2, image3];

  return (
    <section className=" px-5  flex flex-col">
      <h5 className=" text-letra text-lg font-bold mt-7 mb-8">Todos los posts</h5>

      {filterdPost.map((post, index) => (
        <CardPreviewPost
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
