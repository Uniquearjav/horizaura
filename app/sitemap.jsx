const BASE_URL = `https://${process.env.DOMAIN}`;

export async function ProductsUrl() {
    try {
        const res = await fetch(`${BASE_URL}/api/products/all`);
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await res.json();
        return products.map(product => ({
            url: `${BASE_URL}/store/${product.asin1}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export default async function sitemap() {
    try {
        const productUrls = await ProductsUrl();
        const sitemapUrls = [
            {
                url: BASE_URL,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            },
            {
                url: `${BASE_URL}/store`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            },
            ...productUrls, // Merge product URLs into sitemap URLs
        ];
        return sitemapUrls;
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return [];
    }
}
