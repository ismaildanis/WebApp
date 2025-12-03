"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const items = [
  { id: 1, image: "/images/swiper1.png" },
  { id: 2, image: "/images/swiper1.png" },
  { id: 3, image: "/images/swiper1.png" },
  { id: 4, image: "/images/swiper1.png" },
  { id: 5, image: "/images/swiper1.png" },
];

export default function SectionGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 relative">
        
        <h2 className="text-2xl font-bold text-white ml-2 sm:ml-16 text-center sm:text-left">
          POPÜLER ÜRÜNLER
        </h2>

        {/* Masaüstü oklar */}
        <div className="hidden sm:flex items-center gap-2 absolute right-6 sm:right-16 z-20">
          <button className="custom-prev w-10 h-10 rounded-full bg-black shadow flex items-center justify-center hover:bg-[var(--campaign-header-bg)] transition cursor-pointer">
            <ChevronLeftIcon className="w-4 h-4 text-white" />
          </button>
          <button className="custom-next w-10 h-10 rounded-full bg-black shadow flex items-center justify-center hover:bg-[var(--campaign-header-bg)] transition cursor-pointer">
            <ChevronRightIcon className="w-4 h-4 text-white" />
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
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
          1536: { slidesPerView: 5, spaceBetween: 36 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[280px] sm:!w-[320px] md:!w-[360px] lg:!w-[380px] !shrink-0 cursor-pointer"
          >
            <div className="relative w-full aspect-square bg-[var(--background-primary)] rounded-2xl overflow-hidden">
              <Image
                fill
                sizes="(min-width:1024px) 340px, (min-width:768px) 300px, 260px"
                src={item.image}
                alt="image"
                className="object-contain hover:scale-105 transition-all duration-300"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination - sadece mobil */}
      <div className="custom-pagination flex justify-center gap-2 mt-6 sm:hidden" />
    </section>
  );
}
