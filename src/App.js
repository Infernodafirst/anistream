import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // install with: npm install lucide-react

/* ---------------- Navbar ---------------- */
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold text-orange-500">AniStream</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/features" className="hover:text-orange-400">Features</Link>
        <Link to="/pricing" className="hover:text-orange-400">Pricing</Link>
        <Link to="/faq" className="hover:text-orange-400">FAQ</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
      </div>
    </nav>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-gray-400 py-4 mt-10">
      <p>© {new Date().getFullYear()} AniStream. All rights reserved. | Made by Harshvardhan Kodumur</p>
    </footer>
  );
}

/* ---------------- Home Page ---------------- */
function Home() {
  const trending = [
    { title: "Jujutsu Kaisen", img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen" },
    { title: "Demon Slayer", img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", url: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba" },
    { title: "Attack on Titan", img: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg", url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin" },
    { title: "One Piece", img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg", url: "https://myanimelist.net/anime/21/One_Piece" },
    { title: "Naruto Shippuden", img: "https://cdn.myanimelist.net/images/anime/5/17407.jpg", url: "https://myanimelist.net/anime/1735/Naruto__Shippuuden" },
    { title: "Dragon Ball Z", img: "https://cdn.myanimelist.net/images/anime/1607/117271.jpg", url: "https://myanimelist.net/anime/813/Dragon_Ball_Z" },
    { title: "My Hero Academia", img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg", url: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia" },
    { title: "Death Note", img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg", url: "https://myanimelist.net/anime/1535/Death_Note" },
    { title: "Fullmetal Alchemist: Brotherhood", img: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg", url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood" },
    { title: "Bleach", img: "https://cdn.myanimelist.net/images/anime/3/40451.jpg", url: "https://myanimelist.net/anime/269/Bleach" },
  ];

  const newReleases = [
    { title: "Chainsaw Man", img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg", url: "https://myanimelist.net/anime/44511/Chainsaw_Man" },
    { title: "Solo Leveling", img: "https://cdn.myanimelist.net/images/anime/1763/138940.jpg", url: "https://myanimelist.net/anime/52299/Ore_dake_Level_Up_na_Ken" },
    { title: "Tokyo Revengers", img: "https://cdn.myanimelist.net/images/anime/1828/117774.jpg", url: "https://myanimelist.net/anime/42249/Tokyo_Revengers" },
    { title: "Black Clover", img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg", url: "https://myanimelist.net/anime/34572/Black_Clover" },
    { title: "Blue Lock", img: "https://cdn.myanimelist.net/images/anime/1121/126481.jpg", url: "https://myanimelist.net/anime/49596/Blue_Lock" },
    { title: "Hell's Paradise", img: "https://cdn.myanimelist.net/images/anime/1286/135629.jpg", url: "https://myanimelist.net/anime/46569/Jigokuraku" },
    { title: "Spy x Family", img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", url: "https://myanimelist.net/anime/50265/Spy_x_Family" },
    { title: "Oshi no Ko", img: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg", url: "https://myanimelist.net/anime/52034/Oshi_no_Ko" },
    { title: "Mushoku Tensei", img: "https://cdn.myanimelist.net/images/anime/1834/122627.jpg", url: "https://myanimelist.net/anime/51180/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2" },
    { title: "Vinland Saga", img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg", url: "https://myanimelist.net/anime/37521/Vinland_Saga" },
  ];

  const Section = ({ title, shows }) => {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
      }
    };

    return (
      <div className="mb-10 relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          {/* Anime Scroll Row */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {shows.map((show, i) => (
              <a
                key={i}
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[180px] bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <img src={show.img} alt={show.title} className="h-48 w-full object-cover" />
                <div className="p-2">
                  <p className="text-lg truncate">{show.title}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-70"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96 mb-10">
        <img
          src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Watch the Latest Anime</h1>
          <p className="mb-4 text-lg">Stream trending anime anytime, anywhere.</p>
          <Link
            to="/pricing"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-bold"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      {/* Sections */}
      <div className="p-6">
        <Section title="🔥 Trending Now" shows={trending} />
        <Section title="🆕 New Releases" shows={newReleases} />
      </div>
    </div>
  );
}

/* ---------------- Other Pages (same as before) ---------------- */
function Features() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <ul className="space-y-4 text-lg">
        <li>✨ High-quality streaming up to 4K</li>
        <li>📺 Simulcast latest episodes</li>
        <li>📱 Multi-device support</li>
        <li>🚀 Offline viewing available</li>
        <li>❌ Ad-free experience with premium</li>
      </ul>
    </div>
  );
}

function Pricing() {
  const plans = [
    { name: "Free", price: "₹0/month", perks: ["Limited access", "Ads included"] },
    { name: "Premium", price: "₹499/month", perks: ["All anime unlocked", "Ad-free", "Offline viewing"] },
    { name: "Ultimate", price: "₹799/month", perks: ["Everything in Premium", "4K quality", "Multiple devices"] },
  ];
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-2 text-orange-400">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.perks.map((perk, j) => (
                <li key={j} className="text-gray-300">✔ {perk}</li>
              ))}
            </ul>
            <Link to="/register" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold">
              Subscribe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Can I cancel anytime?</h3>
          <p className="text-gray-300">Yes, subscriptions can be cancelled anytime from your account settings.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Do you offer free trials?</h3>
          <p className="text-gray-300">Yes, a 14-day free trial is available for Premium and Ultimate plans.</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" />
        <textarea placeholder="Message" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold">
          Send
        </button>
      </form>
    </div>
  );
}

function Register() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-2 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Password" className="w-full p-2 rounded bg-gray-700 text-white" />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold">
          Create Account
        </button>
      </form>
    </div>
  );
}

/* ---------------- App Wrapper ---------------- */
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
