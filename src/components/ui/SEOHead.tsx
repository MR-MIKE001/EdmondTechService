import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@/utils/constants'

interface Props {
  title: string
  description: string
  canonical?: string
}

export default function SEOHead({ title, description, canonical }: Props) {
  const full = `${title} | Edmond Tech Services`
  const url  = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
