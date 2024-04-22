import "./globals.css";
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"

export const metadata = {
  title: "Julia Ver Art",
  description: "Julia Ver, Artist & Photographer in Porto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
