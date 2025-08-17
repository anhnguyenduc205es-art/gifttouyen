import "./globals.css";

export const metadata = {
  title: "Happy Birthday!",
  description: "An animated birthday surprise filled with emotions, words from the heart, and a letter that types itself — just for you."
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
