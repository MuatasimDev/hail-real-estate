"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function PropertyGallery({ images, title }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) return null;

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (currentImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-64 overflow-hidden rounded-lg">
      <Image
        src={images[currentImage]}
        alt={title}
        fill
        sizes="(max-width: 768px) 92vw, 624px"
        className="object-cover"
      />

      {images.length > 1 && (
        <>
          {/* السهم اليمين */}
          <button
          dir="ltr"
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-2xl text-white hover:bg-black/70"
            aria-label="الصورة التالية"
          >
            ❯
          </button>

          {/* السهم اليسار */}
          <button
          dir="ltr"
            onClick={previousImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-2xl text-white hover:bg-black/70"
            aria-label="الصورة السابقة"
          >
            ❮
          </button>

          {/* عداد الصور */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
            {currentImage + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}