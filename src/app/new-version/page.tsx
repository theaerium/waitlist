import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Process from '../components/process';
import LookFor from '../components/lookfor';

export default function NewVersionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Process />
        <LookFor />
      </main>
      <Footer />
    </div>
  );
}