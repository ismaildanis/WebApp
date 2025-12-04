export default function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    
    return [
        {
        url: `${siteUrl}/`,
        lastModified: new Date(),
        },
        {
        url: `${siteUrl}/hakkimizda`,
        lastModified: new Date(),
        },
        {
        url: `${siteUrl}/urunler`,
        lastModified: new Date(),
        },
        {
        url: `${siteUrl}/iletisim`,
        lastModified: new Date(),
        },
    ];
}
