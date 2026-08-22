import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Formacao from '@/components/Formacao';
import Atuacoes from '@/components/Atuacoes';
import Livros from '@/components/Livros';
import Depoimentos from '@/components/Depoimentos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import WhatsAppFlutuante from '@/components/WhatsAppFlutuante';

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Sobre />
      <Formacao />
      <Atuacoes />
      <Livros />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}
