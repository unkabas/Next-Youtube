import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'
import { Layout } from '../components/layout/Layout'
import './globals.scss'


const suse = SUSE({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nextube',
	description: 'Best video platform',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={suse.className}>
					<Layout>{children}</Layout>
				</body>
		</html>
	)
}
