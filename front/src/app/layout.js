import Header from "./components";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Header/>
     {children}
     <Footer/>
    </html>
  )
}
