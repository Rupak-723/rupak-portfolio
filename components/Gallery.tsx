import Image from "next/image";

const images = [
  {
    src: "/images/IISER Kolkata 1.jpeg",
    caption: "The beginning of my scientific journey.",
  },
  {
    src: "/images/IISER Kolkata 2.jpeg",
    caption: "Some evenings inspire more than lectures.",
  },
  {
    src: "/images/Iiser Kolkata.jpg",
    caption: "Beauty isn't always found in clear skies.",
  },
  {
    src: "/images/Freshers.jpeg",
    caption: "Freshers'23.",
  },

  {
    src: "/images/Friend Circle.jpeg",
    caption: "Friend Circle.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.caption}
                width={400}
                height={400}
                className="h-72 w-full object-cover transition duration-300 hover:scale-110"
              />

              <div className="p-4">
                <p className="text-center text-sm text-slate-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
