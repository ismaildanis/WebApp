export const metadata = {
  title: "Gizlilik Politikası | Anka Metal",
  description:
    "Anka Metal web sitesi gizlilik politikası. Herhangi bir kişisel veri toplanmamaktadır.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Gizlilik Politikası</h1>

        <p>
          Anka Metal olarak web sitemiz üzerinden hiçbir şekilde kişisel veri 
          toplamıyoruz. Sitemizde form, üyelik sistemi veya veri saklama 
          mekanizması bulunmamaktadır.
        </p>

        <h2 className="text-xl font-semibold">Toplanan Bilgiler</h2>
        <p>
          Web sitemiz yalnızca tanıtım amacı taşır.  
          Kullanıcıdan doğrudan bir bilgi alınmamaktadır.
        </p>

        <h2 className="text-xl font-semibold">İletişim Kanalları</h2>
        <p>
          Sitedeki WhatsApp veya telefon ikonuna tıklamanız durumunda 
          WhatsApp uygulaması açılır ve tüm iletişim platform üzerinde 
          gerçekleşir. Bu süreçte web sitemiz bir veri işlemez.
        </p>

        <h2 className="text-xl font-semibold">Veri Güvenliği</h2>
        <p>
          Sitede herhangi bir veri işleme olmadığı için depolama veya 
          paylaşım söz konusu değildir.
        </p>

        <p className="opacity-70">
          Soru ve talepleriniz için: ankametal60@gmail.com
        </p>
      </div>
    </main>
  );
}
