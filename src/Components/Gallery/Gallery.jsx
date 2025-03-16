import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageTitle from '../Header/PageTitle';
import More from "../Home/More";

const Gallery = () => {
  const images = [
    // { src: "/imgs/2.jpg" },
    { src: "/imgs/i2.png" },
    { src: "/imgs/i3.png" },
    { src: "/imgs/i1.png" },
    { src: "/imgs/3.jpg" },
    { src: "/imgs/4.jpg" },
    { src: "/imgs/slide-1.jpg" },
    { src: "/imgs/slide-2.jpg" },
    { src: "/imgs/index-1.jpg" },
        { src: "/imgs/1.jpg" },


  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (


    <>
     <PageTitle page="Gallery" title="Gallery" />
    
    
   
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Gallery ${i + 1}`}
            className="w-full max-h-[400px] lg:h-[400px] object-cover rounded-lg cursor-pointer shadow-md "
            loading="lazy"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </div>

    <More />
    </>
  );
};

export default Gallery;
