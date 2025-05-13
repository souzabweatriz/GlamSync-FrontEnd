import "../styles/globals.css";

export const metadata = {
  title: "GlamSync",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
