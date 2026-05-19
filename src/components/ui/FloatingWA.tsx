import { WHATSAPP_URL } from '@/utils/constants'
import WAIcon from './WAIcon'

export default function FloatingWA() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      className="fab" aria-label="Chat with us on WhatsApp">
      <WAIcon size={26} />
    </a>
  )
}
