// ─── Replace these before going live ──────────────────────────
export const WHATSAPP_NUMBER = '+2348125842842'; // digits only, e.g. 2348012345678
export const DIRECTOR_NAME   = 'Mr Edmond Omovie';
export const OFFICE_ADDRESS  = 'No 1 airport road by Dan Tata house opposite signature bank before International hospital, Kano, Nigeria';
export const PHONE_NUMBER    = '+234703 069 3607';
export const EMAIL_ADDRESS   = 'Info@edmondtechservices.com';
export const SITE_URL        = 'https://edmondtechservices.com';

// ─── Derived ──────────────────────────────────────────────────
export const WHATSAPP_URL = `https://wa.me/+2348125842842`;
export const COMPANY_NAME = 'Edmond Tech Services';
export const TAGLINE      = "Kano's Exclusive SWAD Digital Solutions Partner";

// ─── Navigation ───────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Home',      path: '/'          },
  { label: 'About',     path: '/about'     },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact',   path: '/contact'   },
];

// ─── Contact details ──────────────────────────────────────────
export const CONTACT_DETAILS = [
  { icon: '📍', label: 'Address',        value: OFFICE_ADDRESS                         },
  { icon: '📞', label: 'Phone',          value: PHONE_NUMBER,  href: `tel:${PHONE_NUMBER}` },
  { icon: '✉️', label: 'Email',          value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}` },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Mon–Fri: 8:00am – 5:00pm\nSat: 9:00am – 1:00pm\nSun: Closed',
  },
];

// ─── Why Edmond Tech ──────────────────────────────────────────
export const WHY_ITEMS = [
  {
    number: '01',
    heading: 'Exclusive Territory',
    body: 'We are the only SWAD Digital Solutions partner in Kano State. No other company can offer you what we offer here.',
  },
  {
    number: '02',
    heading: 'Straightforward Onboarding',
    body: 'From first conversation to live system in days — not weeks. We handle setup, training, and support.',
  },
  {
    number: '03',
    heading: 'Solutions That Grow With You',
    body: 'Whether you have 10 rooms or 100, our solutions scale with your business at every stage.',
  },
];

// ─── HotelGo features ─────────────────────────────────────────
export const HOTELGO_FEATURES = [
  'Front desk and reception management',
  'Booking and reservation tracking',
  'Room availability and housekeeping status',
  'Guest check-in and check-out',
  'Billing, invoicing, and payment records',
  'Daily, weekly, and monthly reporting',
  'Staff access and role management',
  'Works on desktop, tablet, and mobile',
];

// ─── Process steps ────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: '01',
    heading: 'Reach Out',
    body: 'Message us on WhatsApp. Tell us about your business and what you are looking to solve.',
  },
  {
    number: '02',
    heading: 'Get a Free Demo',
    body: 'We visit you or set up an online session and show you exactly how the solution works for your type of business.',
  },
  {
    number: '03',
    heading: 'Onboard and Go Live',
    body: 'Our team handles your setup, staff training, and go-live. We stay with you until everything runs smoothly.',
  },
  {
    number: '04',
    heading: 'Ongoing Support',
    body: 'We are in Kano. If you need us, you can reach us — by phone, WhatsApp, or in person.',
  },
];
