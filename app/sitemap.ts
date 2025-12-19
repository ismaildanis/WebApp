export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function sitemap() {
  return [
    {
      url: 'https://ankametalhurda.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ankametalhurda.com/hakkimizda',
      lastModified: new Date(),
    },
    {
      url: 'https://ankametalhurda.com/urunler',
      lastModified: new Date(),
    },
    {
      url: 'https://ankametalhurda.com/iletisim',
      lastModified: new Date(),
    },
  ];
}
