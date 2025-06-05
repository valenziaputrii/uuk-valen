import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Kaki/Kaki';
import Header from './Kepala/Navbar';
import Register from '../src/eventPendaftaran/Body';
import Payment from './checkout/checkout';

const Beranda = () => (
  <div className="bg-gradient-to-r from-purple-100 to-yellow-100 pt-48 pb-20">
    <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Bergabung Bersama Kami
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Temukan berbagai kursus untuk mengembangkan keahlian dan mencapai tujuan karier Anda.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
        <Link to="/daftar">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200 shadow-md">
            Mulai Daftar
          </button>
        </Link>
        <Link to="/checkout">
          <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-200 shadow-md">
            Lanjut ke Pembayaran
          </button>
        </Link>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/daftar" element={<Register />} />
            <Route path="/checkout" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;