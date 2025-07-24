'use client';
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function AlbumGallery({ images, album }) {
  const [lightbox, setLightbox] = useState({ open: false, img: null });

  useEffect(() => {
    if (!lightbox.open) return;
    function onKey(e) {
      if (e.key === "Escape") setLightbox({ open: false, img: null });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  const openLightbox = useCallback((img) => setLightbox({ open: true, img }), []);
  const closeLightbox = useCallback(() => setLightbox({ open: false, img: null }), []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            className="rounded overflow-hidden shadow focus:outline-none cursor-pointer"
            onClick={() => openLightbox(img)}
            aria-label={`Open image ${i + 1}`}
            type="button"
          >
            <Image
              src={img}
              alt={`Photo ${i + 1} from ${album}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover cursor-pointer"
            />
          </button>
        ))}
      </div>
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 cursor-pointer"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              type="button"
            >
              &times;
            </button>
            <Image
              src={lightbox.img}
              alt="Enlarged album image"
              width={1200}
              height={800}
              className="rounded max-h-[80vh] w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
} 