import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from './ui/dashboard/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>{children}
      <Footer/>
      </body>
    </html>
  );
}
