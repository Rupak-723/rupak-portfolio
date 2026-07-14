import Image from "next/image";

const images = [
  "/images/IISER Kolkata 1.jpeg",
  "/images/IISER Kolkata 2.jpeg",
  "/images/Iiser Kolkata.jpg",
  "/images/profile.jpg",
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
              className="overflow-hidden rounded-2xl"
            >

              <Image
                src={image}
                alt="Gallery"
                width={400}
                height={400}
                className="h-72 w-full object-cover transition hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
