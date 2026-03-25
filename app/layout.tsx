import type { Metadata } from 'next'; import './globals.css'; import { Header } from '@/components/header'; import { Footer } from '@/components/footer';
export const metadata: Metadata = { title:'TALONS', description:'Build Solana apps, dashboards, pages, and protocol interfaces with AI.' };
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>)}
