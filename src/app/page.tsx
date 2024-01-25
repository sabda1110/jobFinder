import Image from 'next/image';
import Navbar from '@/components/Utama/Navbar/Navbar';
import Search from '@/components/Utama/Search/Search';
import JobDiv from '@/components/Utama/JobDiv/JobDiv';
import ValueDiv from '@/components/Utama/ValueDiv/ValueDiv';
import Footer from '@/components/Utama/Footer/Footer';

export default function Home() {
  return (
    <main className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <JobDiv />
      <ValueDiv />
      <Footer />
    </main>
  );
}
