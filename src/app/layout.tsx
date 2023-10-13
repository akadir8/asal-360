import './styles/globals.css'
import { Inter } from "@next/font/google";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: {
		default: "asal360°.com",
		template: "%s | asal360°.com",
	},
	description: "I am interested in 360° shooting and photography in the Ubn-Jr team.",
	openGraph: {
		title: "asal360°.com",
		description:
			"I am interested in 360° shooting and photography in the Ubn-Jr team.",
		url: "https://chronark.com",
		siteName: "asal360°.com",
		images: [
			{
				url: "https://chronark.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Chronark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable].join(" ")}>
			
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}