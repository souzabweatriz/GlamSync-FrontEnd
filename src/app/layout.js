import "../styles/globals.css";
export const metadata = {
  title: "My First NextJS App",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
