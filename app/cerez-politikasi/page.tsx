export const metadata = {
  title: "Çerez Politikası | Anka Metal",
  description:
    "Anka Metal web sitesi çerez (cookie) politikası. Sitemizde takip amaçlı çerez kullanılmamaktadır.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Çerez Politikası</h1>

        <p>
          Anka Metal olarak web sitemizde kullanıcıları izlemek, profil çıkarmak 
          veya reklam amaçlı hiçbir çerez (cookie) kullanmıyoruz.
        </p>

        <h2 className="text-xl font-semibold">Kullanılan Çerezler</h2>
        <p>
          • Zorunlu çerezler: Yok  
          <br />• Performans çerezleri: Yok  
          <br />• Reklam/izleme çerezleri: Yok  
        </p>

        <p>
          Eğer gelecekte Google Analytics veya Meta Pixel eklenirse, bu politika 
          güncellenecek ve çerez bilgilendirme banner’ı gösterilecektir.
        </p>

        <p className="opacity-70">Her türlü soru için: ankametal60@gmail.com</p>
      </div>
    </main>
  );
}
