import type {MetadataRoute} from 'next';
import {pages} from '@/components/content';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL; if(!base)return [];return ['',...Object.keys(pages),'gallery','testimonials','faqs','contact-us'].map(path=>({url:`${base}/${path}`,changeFrequency:'monthly',priority:path?0.7:1}))}
