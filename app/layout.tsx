import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/site';
export const metadata: Metadata = { title: { default: 'Alder & Wren | A little more life, every day', template: '%s | Alder & Wren' }, description: 'Discover a thoughtful approach to later life. Explore our care, welcoming spaces and everyday living, and arrange a personal visit.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en-GB"><body><a className="skip" href="#main">Skip to content</a><Shell>{children}</Shell></body></html> }
