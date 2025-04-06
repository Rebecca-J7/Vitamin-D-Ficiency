import "./globals.css";

export const metadata = {
  title: "vitamin-d-ficiency",
  description:
    "Website dedicated to support users in recovering from vitamin D deficiency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-linear-to-r flex h-screen flex-col">{children}</body>
    </html>
  );
}
