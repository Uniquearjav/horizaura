const BASE_URL = `https://${process.env.DOMAIN}`

export default function sitemap()
{
    return [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: BASE_URL + '/store',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }