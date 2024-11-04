import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'UTRGV CS Confidence',
    description: 'Building confidence in computer science students',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-white relative min-h-screen`}>
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
            <img
                src="/images/v-logo.png"
                alt="UTRGV V Logo Background"
                className="w-[80%] max-w-[1000px] opacity-30"
                style={{
                    filter: 'contrast(100%) brightness(90%)'
                }}
            />
        </div>

        <nav className="bg-[#F05023] text-white p-4 relative z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold hover:text-gray-200">
                    UTRGV CS Confidence
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-gray-200">Home</Link>
                    <Link href="/resources" className="hover:text-gray-200">Resources</Link>
                    <Link href="/stories" className="hover:text-gray-200">Student Stories</Link>
                    <Link href="/faq" className="hover:text-gray-200">FAQ</Link>
                    <Link href="/contact" className="hover:text-gray-200">Contact</Link>
                </div>
            </div>
        </nav>

        <main className="relative z-10">
            <div className="bg-white/70">
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}