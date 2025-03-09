import React from "react";
import PageTitle from "../Header/PageTitle";
import More from "../Home/More";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "/imgs/1.jpg", // Main image
      thumbnail: "/imgs/1.jpg", // Thumbnail
    },
  
    {
      original: "/imgs/2.jpg",
      thumbnail: "/imgs/2.jpg",
    },
    {
      original: "/imgs/3.jpg",
      thumbnail: "/imgs/3.jpg",
    },
    {
      original: "/imgs/4.jpg",
      thumbnail: "/imgs/4.jpg",
    },
    {
      original: "/imgs/slide-1.jpg",
      thumbnail: "/imgs/slide-1.jpg",
    },
    {
      original: "/imgs/slide-2.jpg",
      thumbnail: "/imgs/slide-2.jpg",
    },
  ];

  return (
    <>
      <PageTitle page="Gallery" title="Gallery" />

      <div className=" overflow-hidden object-cover">
        <ImageGallery
          showFullscreenButton={false} // Enable full-screen mode
          showPlayButton={false} // Show play button for slideshow
          showThumbnails={false} // Show thumbnails below
          autoPlay={true} // Auto-play slideshow
          slideInterval={3000}
          items={images}
          
        />
      </div>

      <More />
    </>
  );
};

export default Gallery;
