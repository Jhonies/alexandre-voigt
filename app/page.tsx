import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Atuacoes from '@/components/Atuacoes';
import Livros from '@/components/Livros';
import Depoimentos from '@/components/Depoimentos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Atuacoes />
      <Livros />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
