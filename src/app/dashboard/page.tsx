"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { FiSearch, FiCalendar, FiUser } from "react-icons/fi";

export default function Dashboard() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
  });

  const trips = [
    {
      image: "/nusa-penida.jpg",
      name: "Nusa Penida Kelingking Beach",
      location: "Bali, Indonesia",
      price: "Rp 500.000/3days",
      rating: 4.8,
    },
    {
      image: "/raja.jpg",
      name: "Raja Ampat Salawati Island",
      location: "Papua, Indonesia",
      price: "Rp 500.000/3days",
      rating: 4.8,
    },
    // tambahkan data lain jika perlu
  ];

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500">
      <div className="w-full max-w-[430px] mx-auto bg-[#fdf6f3] relative min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Welcome!</span>
              <span className="font-bold text-gray-900">Victoria Watson</span>
            </div>
          </div>

          <button className="bg-white p-2 rounded-full shadow">
            <Image src="/icons/bell.svg" alt="Notification" width={20} height={20} />
          </button>
        </div>

        {/* Title */}
        <div className="px-6 text-center">
          <h1 className="text-xl font-semibold text-gray-900">Explore New</h1>
          <h2 className="text-2xl font-bold text-gray-900">Experience with Us</h2>
        </div>

        {/* Categories */}
        <div className="px-6 mt-4 flex gap-3 flex-wrap">
          {["Beach", "Mountain", "Nature", "Historical"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 text-sm rounded-full bg-white shadow text-blue-600 font-semibold"
            >
              {cat}
            </button>
          ))}
        </div>


        {/* Trip Recommendation */}
        <div className="px-6 mt-6">
          <h3 className="font-bold text-lg mb-3 text-gray-900">Trip Recommendation</h3>
          <div ref={sliderRef} className="keen-slider">
            {trips.map((trip, i) => (
              <div key={i} className="keen-slider__slide bg-white rounded-lg shadow overflow-hidden cursor-pointer">
                <Image
                  src={trip.image}
                  alt={trip.name}
                  width={200}
                  height={120}
                  className="object-cover w-full h-32"
                />
                <div className="p-2">
                  <h4 className="font-semibold text-sm">{trip.name}</h4>
                  <p className="text-xs text-gray-500">{trip.location}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-blue-600 font-bold text-xs">{trip.price}</span>
                    <span className="text-yellow-500 text-sm">⭐ {trip.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Banner */}
        <div className="px-6 mt-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 flex justify-between items-center">
            <div>
              <h4 className="text-lg font-bold">Discover the Beauty of Japan</h4>
              <button className="bg-white text-indigo-500 mt-2 px-4 py-2 rounded-full text-sm font-semibold">
                Discover
              </button>
            </div>
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full" />
          </div>
        </div>

        {/* More to Explore */}
        <div className="px-6 mt-6 mb-24">
          <h3 className="font-bold text-lg mb-3 text-gray-900">More to Explore</h3>
          {[
            {
              image: "/castle.jpg",
              name: "Fortress Osaka Castle Park",
              location: "Osaka, Japan",
              price: "Rp 25.000.000/7days",
              rating: 4.8,
            },
            {
              image: "/santorini.jpg",
              name: "Santorini Island Aegean Sea",
              location: "South Aegean, Greece",
              price: "Rp 20.000.000/7days",
              rating: 4.8,
            },
            {
              image: "/athena.jpg",
              name: "Temple of Athena Nike",
              location: "Acropolis, Greece",
              price: "Rp 30.000.000/7days",
              rating: 5.0,
            },
          ].map((trip, i) => (
            <div key={i} className="mb-4 bg-white rounded-lg shadow overflow-hidden">
              <Image
                src={trip.image}
                alt={trip.name}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-700">{trip.name}</h4>
                <p className="text-sm text-gray-500">{trip.location}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-600 font-bold text-sm">{trip.price}</span>
                  <span className="text-yellow-500 text-sm">⭐ {trip.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-[430px] mx-auto bg-white flex justify-around py-3 shadow-t z-50">
          <button className="flex flex-col items-center text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FiSearch className="w-6 h-6" />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FiCalendar className="w-6 h-6" />
            <span className="text-xs mt-1">Schedule</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FiUser className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </nav>
      </div>
    </main>
  );
}
