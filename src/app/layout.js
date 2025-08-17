import "./globals.css";

export const metadata = {
  title: "Happy Birthday Uyên!",
  description: "Một bất ngờ sinh nhật đầy cảm xúc, lời chúc từ trái tim và lá thư tự gõ =))."
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
