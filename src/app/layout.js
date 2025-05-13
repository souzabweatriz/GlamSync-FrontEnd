import "../styles/globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "GlamSync",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
