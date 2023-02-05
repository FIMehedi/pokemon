'use client';

import { pokemonClient } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Ubuntu } from '@next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
	weight: '400',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={ubuntu.className}>
				<ApolloProvider client={pokemonClient}>{children}</ApolloProvider>
			</body>
		</html>
	);
}
