import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Asjad's Protfolio",
	description: 'Modern & Minimalist Web Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={recursive.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
