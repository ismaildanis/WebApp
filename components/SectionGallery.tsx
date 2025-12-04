"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const items = [
  { id: 1, name: "Demir Hurda", image: "/images/demir.png" },
  { id: 2, name: "Bakır", image: "/images/bakır.png" },
  { id: 3, name: "Nikel", image: "/images/nikel.png" },
  { id: 4, name: "Paslanmaz Çelik", image: "/images/paslanmazcelik.png" },
  { id: 5, name: "Alüminyum", image: "/images/swiper4.png" },
  { id: 6, name: "Araba Hurda Parçası", image: "/images/arabahurda.png" },
  { id: 7, name: "Pirinç", image: "/images/sarı.png" },
];

export default function SectionGallery() {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-16">
      
      <div className="flex items-center justify-between mb-6 relative">
        <h2 className="text-2xl font-bold text-white">ÜRÜNLER</h2>

        <div className="hidden md:flex items-center gap-3 absolute right-0">
          <button className="custom-prev w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-[var(--gold)] transition">
            <ChevronLeftIcon className="w-5 h-5 text-black" />
          </button>
          <button className="custom-next w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-[var(--gold)] transition">
            <ChevronRightIcon className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <Swiper
        className="overflow-visible"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={16}
        slidesPerView={1.2}

        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 16 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          768: { slidesPerView: 2.8, spaceBetween: 24 },
          1024: { slidesPerView: 3.2, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="cursor-pointer group"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black">

              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 z-[1]" />

              <div className="absolute bottom-4 left-4 z-[2]">
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl drop-shadow-xl">
                  {item.name}
                </span>
              </div>

              <Image
                fill
                src={item.image}
                alt={item.name}
                className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center gap-2 mt-6 md:hidden" />
    </section>
  );
}
