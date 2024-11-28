import "./globals.css";
import { dm_sans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} overflow-x-hidden bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
