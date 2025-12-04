export const metadata = {
  title: "KVKK Aydınlatma Metni | Anka Metal",
  description:
    "Anka Metal hurda alım satım hizmetlerinde kişisel verilerin korunmasına ilişkin KVKK aydınlatma metni.",
};

export default function KVKK() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">KVKK Aydınlatma Metni</h1>

        <p>
          Anka Metal olarak, yalnızca hizmet talebiniz doğrultusunda bizimle 
          WhatsApp veya telefon üzerinden paylaştığınız kişisel veriler 
          (telefon numarası, gönderdiğiniz görseller vb.) sizin açık 
          iletişiminiz kapsamında işlenmektedir.
        </p>

        <p>
          Web sitemiz üzerinden herhangi bir kayıt, form doldurma veya 
          veri toplama faaliyetimiz bulunmamaktadır. Sitemiz kişisel veri 
          işlemek amacıyla çerez kullanmamaktadır.
        </p>

        <h2 className="text-xl font-semibold">İşlenen Veriler</h2>
        <p>
          • Telefon numarası  
          <br />• WhatsApp üzerinden gönderdiğiniz bilgiler  
          <br />• Gerekirse konum bilgisi (yalnızca sizin iletmeniz halinde)
        </p>

        <h2 className="text-xl font-semibold">Veri İşleme Amaçları</h2>
        <p>
          • Hurda alım satım süreçlerinin yürütülmesi  
          • Teklif, fiyat ve bilgi paylaşımı  
          • Nakliye ve operasyonel süreçlerin yürütülmesi  
        </p>

        <h2 className="text-xl font-semibold">Verilerin Üçüncü Kişilerle Paylaşımı</h2>
        <p>
          Verileriniz yalnızca iletişim amaçlı olarak tarafımıza iletilmekte 
          olup üçüncü kişilerle paylaşılmamaktadır.
        </p>

        <h2 className="text-xl font-semibold">Haklarınız</h2>
        <p>
          KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlenmesini 
          kısmen veya tamamen durdurma haklarına sahipsiniz.
        </p>

        <p className="opacity-70">
          İletişim: ankametal60@gmail.com — 0 538 917 31 43
        </p>
      </div>
    </main>
  );
}
