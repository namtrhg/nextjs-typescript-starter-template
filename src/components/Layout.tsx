import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>E-commerce Template</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae velit tincidunt, congue nibh nec, tincidunt urna. Vestibulum id varius orci, sed volutpat sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tempor mauris sed massa aliquet, ac malesuada nibh gravida. In hac habitasse platea dictumst. Sed pellentesque bibendum velit, et pretium urna lacinia eget. Curabitur malesuada elit rhoncus mauris consequat vestibulum. Phasellus nec nulla felis. Aenean at libero tincidunt, maximus sem at, lacinia est. Vestibulum imperdiet arcu at hendrerit scelerisque. Phasellus interdum velit sit amet lacus rhoncus, eget sodales lectus faucibus. Aliquam erat volutpat."
        />
        <meta property="og:image" content="/logo.jpg" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="image_src" href="/logo.jpg" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="container mx-auto relative flex-auto">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
