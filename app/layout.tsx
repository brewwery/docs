import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "Brewwery Docs",
    template: "%s – Brewwery Docs",
  },
  description:
    "Documentation for Brewwery — macOS GUI for Homebrew",
  metadataBase: new URL("https://docs.brewwery.com"),
};

const logo = (
  <span style={{ display: "inline-flex", alignItems: "center" }}>
    <img
      src="/Brewwery.svg"
      alt="Brewwery"
      className="brewwery-logo-light"
      style={{ height: 36, width: "auto" }}
    />
    <img
      src="/Brewwery-Logotype.svg"
      alt="Brewwery"
      className="brewwery-logo-dark"
      style={{ height: 36, width: "auto" }}
    />
  </span>
);

const navbar = (
  <Navbar
    logo={logo}
    logoLink="https://www.brewwery.com"
    projectLink="https://github.com/brewwery/docs"
  />
);

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Brewwery.com
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 36,
          saturation: 100,
          lightness: { light: 44, dark: 50 },
        }}
      >
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/brewwery/docs/tree/main/content"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
