"use client";

import Image from "next/image";

export default function Product() {
  const categories = [
    {
      id: 1,
      name: "Demir ve Çelik Grubu",
      image: "/images/demir.png",
      items: [
        "Hurda demir",
        "DKP hurda (temiz demir)",
        "Pik döküm (döküm demir)",
        "Çelik hurda",
        "Demir talaşı",
        "Profil – sac – lama – inşaat demiri hurdası",
        "Karışık demir hurda",
      ],
    },
    {
      id: 2,
      name: "Bakır Grubu",
      image: "/images/bakır.png",
      items: [
        "Soyulmuş bakır kablo",
        "Karışık bakır kablo",
        "Bakır boru",
        "Bakır kazan parçaları",
        "Bakır talaşı",
        "Kırkambar bakır (karışık bakır hurda)",
      ],
    },
    {
      id: 3,
      name: "Alüminyum Grubu",
      image: "/images/swiper4.png",
      items: [
        "Alüminyum profil",
        "Alüminyum içecek kutusu",
        "Alüminyum levha / sac",
        "Alüminyum jant",
        "Alüminyum motor parçaları",
        "Alüminyum kablo",
      ],
    },
    {
      id: 4,
      name: "Pirinç (Sarı) & Bronz",
      image: "/images/sarı.png",
      items: [
        "Sarı pirinç (musluk, vana, bağlantı parçaları)",
        "Bronz dişliler",
        "Tesisat pirinçleri",
        "Pirinç çubuk / kapı kolları / süs eşyaları",
      ],
    },
    {
      id: 5,
      name: "Paslanmaz Çelik – Krom – Inox",
      image: "/images/paslanmazcelik.png",
      items: [
        "304 paslanmaz",
        "316 paslanmaz",
        "430 krom",
        "Sanayi tipi inox parçaları",
        "Paslanmaz mutfak eşyaları",
        "Inox boru & profil",
      ],
    },
    {
      id: 6,
      name: "Elektronik ve Kablo Hurdası",
      image: "/images/nikel.png",
      items: [
        "Bakır & alüminyum kablo",
        "Elektronik kartlar (anakart, RAM, CPU)",
        "Trafo hurdası",
        "Elektrik motoru hurdası",
        "Elektronik atık – E-atık",
      ],
    },
    {
      id: 7,
      name: "Çinko – Nikel – Kalay – Magnezyum",
      image: "/images/nikel.png",
      items: [
        "Galvaniz (çinko) malzemeler",
        "Nikel alaşımları",
        "Kalay kaplı metaller",
        "Magnezyum parçaları",
      ],
    },
    {
      id: 8,
      name: "Araç Hurdaları",
      image: "/images/arabahurda.png",
      items: [
        "Alüminyum / çelik jant",
        "Hurda motor",
        "Araç gövde demiri",
        "Radyatör (alüminyum / bakır)",
      ],
    },
    {
      id: 9,
      name: "Evsel Metal Ürünleri",
      image: "/images/demir.png",
      items: [
        "Beyaz eşya (buzdolabı, çamaşır makinesi, fırın)",
        "Alüminyum / paslanmaz tava & tencere",
        "Eski sobalar – petekler",
        "Metal mobilya parçaları",
        "Musluk, batarya, vana (pirinç)",
      ],
    },
  ];

  return (
    <section className="px-6 mt-12 md:px-16 md:mt-16 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">ÜRÜNLER</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-[#111] rounded-2xl border border-white/10 p-6 hover:border-[#8b6b2f]/50 transition-all duration-300"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover hover:scale-105 transition-all duration-300"
              />
            </div>

            <h2 className="text-xl font-bold mb-4 text-[#c8a450]">{category.name}</h2>

            <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
              {category.items.map((item, i) => (
                <li key={i} className="before:content-['•'] before:mr-2 before:text-[#c8a450]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
