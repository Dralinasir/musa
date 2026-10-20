
"use client";

import { useState } from "react";
import {
  Heart,
  CalendarDays,
  Clock,
  MapPin,
  Music,
  Utensils,
  Sparkles,
  ChevronDown,
  Flower2,
  Crown,
} from "lucide-react";

const events = [
  {
    title: "Bachelor's Party",
    date: "12 November 2026",
    time: "To be announced",
    venue: "Venue to be announced",
    subtitle: "An unforgettable night",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    description: "A special evening of friendship, music, delicious food and unforgettable memories.",
    special: "Live Singer & Music",
    menu: [
      { name: "Mutton Special", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
      { name: "Chicken Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80" },
      { name: "Kheer", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    title: "Mehndi",
    date: "Date to be announced",
    time: "To be announced",
    venue: "Huhaiz Town",
    subtitle: "Colors, culture & celebration",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    description: "A beautiful traditional celebration filled with vibrant colors, joyful moments and festive flavors.",
    special: "Female Only Event",
    menu: [
      { name: "Gol Gappay", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" },
      { name: "Dahi Bhallay", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80" },
      { name: "Mutton", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
      { name: "Chicken Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    title: "Baraat",
    date: "14 November 2026",
    time: "To be announced",
    venue: "Taj Green Marquee",
    subtitle: "The beginning of forever",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    description: "A royal celebration of love, family and togetherness as Mahnoor and Musa begin their forever.",
    special: "Wedding Menu Coming Soon",
    menu: [],
  },
  {
    title: "Walima",
    date: "16 November 2026",
    time: "8:00 PM",
    venue: "Taj Green Marquee",
    subtitle: "An elegant evening reception",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    description: "An elegant evening of fine dining, beautiful memories and a celebration of a new beginning.",
    special: "Premium Dining & Live Steak",
    menu: [
      { name: "Mutton Steam", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
      { name: "Mutton Joints", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
      { name: "Mutton Handi", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80" },
      { name: "Chicken Handi", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80" },
      { name: "Batair Fry", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
      { name: "Kheer", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80" },
      { name: "Gulab Jamun", image: "https://images.unsplash.com/photo-1666190092159-7d1a4d2f3b49?auto=format&fit=crop&w=600&q=80" },
      { name: "Pasta Selection", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80" },
      { name: "Live Steak Station", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80" },
    ],
  },
];

export default function WeddingPage() {
  const [opened, setOpened] = useState<string[]>([
    "Bachelor's Party",
    "Mehndi",
    "Walima",
  ]);

  function toggleMenu(title: string) {
    setOpened((previous) =>
      previous.includes(title)
        ? previous.filter((item) => item !== title)
        : [...previous, title]
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#30231d]">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#201714]/95 px-5 py-4 backdrop-blur-lg sm:px-10">
        <a href="#home" className="font-serif text-2xl tracking-widest text-[#dfbd7e]">
          M <span className="text-white">&</span> M
        </a>
        <div className="flex gap-4 text-xs uppercase tracking-wider text-white sm:gap-7">
          <a href="#story" className="hover:text-[#dfbd7e]">Our Story</a>
          <a href="#events" className="hover:text-[#dfbd7e]">Events</a>
          <a href="#menu" className="hover:text-[#dfbd7e]">Menu</a>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#201714] px-5 py-32 text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90"
          alt="Wedding celebration"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#201714]/40 to-[#201714]" />

        <div className="relative z-10 max-w-4xl">
          <Heart className="mx-auto mb-8 text-[#dfbd7e]" size={35} strokeWidth={1} />
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#dfbd7e]">
            Together with their families
          </p>
          <h1 className="font-serif text-6xl font-normal leading-tight sm:text-8xl md:text-9xl">
            Mahnoor
            <span className="my-3 block text-4xl italic text-[#dfbd7e] sm:text-6xl">&</span>
            Musa
          </h1>
          <div className="mx-auto my-8 h-px w-32 bg-[#dfbd7e]" />
          <p className="font-serif text-xl italic sm:text-2xl">
            Two hearts. One beautiful forever.
          </p>
          <p className="mt-6 text-sm tracking-[0.3em] text-white/70">NOVEMBER 2026</p>
          <a href="#events" className="mt-10 inline-block rounded-full bg-[#dfbd7e] px-8 py-4 text-xs uppercase tracking-widest text-[#201714] transition hover:bg-white">
            Explore Celebrations ↓
          </a>
        </div>
      </section>

      <section id="story" className="px-5 py-24 text-center sm:py-32">
        <Flower2 className="mx-auto mb-5 text-[#a47b43]" size={28} />
        <p className="text-xs uppercase tracking-[0.3em] text-[#a47b43]">A new chapter begins</p>
        <h2 className="mt-5 font-serif text-4xl sm:text-6xl">A Celebration of Love</h2>
        <div className="mx-auto my-7 h-px w-24 bg-[#c7a66a]" />
        <p className="mx-auto max-w-2xl text-sm leading-8 text-[#79675a] sm:text-base">
          With love in our hearts and blessings from our families, we invite you
          to celebrate the beautiful wedding journey of Mahnoor and Musa.
          Four special occasions, countless memories, and a lifetime of togetherness.
        </p>
      </section>

      <section id="events" className="bg-[#f0e9dc] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a47b43]">Save the dates</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl">Wedding Celebrations</h2>
            <div className="mx-auto my-6 h-px w-24 bg-[#c7a66a]" />
            <p className="text-sm text-[#79675a]">Every occasion has a story of its own.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {events.map((event, index) => {
              const isOpen = opened.includes(event.title);

              return (
                <article key={event.title} className="overflow-hidden border border-[#dfd0b8] bg-[#fffdf9] shadow-lg shadow-[#503b25]/5 transition hover:shadow-xl">
                  <div className="group relative h-64 overflow-hidden sm:h-80">
                    <img src={event.image} alt={`${event.title} celebration`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201714] via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                      <div className="flex justify-between">
                        <span className="font-serif text-4xl text-white/70">0{index + 1}</span>
                        {event.title === "Mehndi" && (
                          <span className="h-fit rounded-full border border-white/40 px-3 py-2 text-[10px] uppercase tracking-wider text-white">Female Only</span>
                        )}
                      </div>
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#dfbd7e]">{event.subtitle}</p>
                        <h3 className="font-serif text-4xl text-white sm:text-5xl">{event.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="space-y-5 border-b border-[#eadfce] pb-6">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="shrink-0 text-[#a47b43]" size={19} />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-[#a18b77]">Date</p>
                          <p className="mt-1 text-sm">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="shrink-0 text-[#a47b43]" size={19} />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-[#a18b77]">Time</p>
                          <p className="mt-1 text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="shrink-0 text-[#a47b43]" size={19} />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-[#a18b77]">Venue</p>
                          <p className="mt-1 text-sm">{event.venue}</p>
                        </div>
                      </div>
                    </div>

                    <p className="py-6 text-sm leading-7 text-[#79675a]">{event.description}</p>

                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a47b43]">
                      {event.title === "Bachelor's Party" ? <Music size={17} /> : event.title === "Mehndi" ? <Flower2 size={17} /> : event.title === "Baraat" ? <Crown size={17} /> : <Utensils size={17} />}
                      {event.special}
                    </div>

                    <button onClick={() => toggleMenu(event.title)} aria-expanded={isOpen} className="mt-6 flex w-full items-center justify-between border-y border-[#eadfce] py-4 text-xs font-semibold uppercase tracking-widest hover:text-[#a47b43]">
                      {event.menu.length ? "Explore Food & Menu" : "Baraat Menu"}
                      <ChevronDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="pt-6">
                        {event.menu.length ? (
                          <>
                            <h4 className="mb-5 font-serif text-2xl">The Menu</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {event.menu.map((dish) => (
                                <div key={`${event.title}-${dish.name}`} className="overflow-hidden bg-[#f7f1e7]">
                                  <img src={dish.image} alt={dish.name} loading="lazy" className="h-32 w-full object-cover sm:h-40" />
                                  <p className="p-3 font-serif text-lg">{dish.name}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="py-8 text-center">
                            <Utensils className="mx-auto mb-4 text-[#a47b43]" size={28} />
                            <p className="font-serif text-2xl">A Feast to Remember</p>
                            <p className="mt-3 text-sm leading-7 text-[#79675a]">
                              Our Baraat menu is being finalized. Delicious surprises will be revealed soon.
                            </p>
                            <span className="mt-4 inline-block bg-[#f0e9dc] px-4 py-2 text-xs uppercase tracking-wider text-[#8d693f]">Menu Coming Soon</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#201714] px-5 py-24 text-center text-white sm:py-32">
        <Sparkles className="mx-auto mb-6 text-[#dfbd7e]" size={30} />
        <p className="text-xs uppercase tracking-[0.3em] text-[#dfbd7e]">A memorable dining experience</p>
        <h2 className="mt-5 font-serif text-4xl sm:text-6xl">The Walima Experience</h2>
        <div className="mx-auto my-7 h-px w-24 bg-[#c7a66a]" />
        <p className="mx-auto max-w-2xl text-sm leading-8 text-white/65">
          Enjoy mutton steam, mutton joints, traditional handi, batair fry,
          kheer, gulab jamun, a pasta selection and a live steak station
          at our Walima reception.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {["Mutton Specials", "Chicken & Mutton Handi", "Kheer & Gulab Jamun", "Live Steak Station"].map((item) => (
            <div key={item} className="border border-[#c7a66a]/30 p-5 font-serif text-lg">
              <Utensils className="mx-auto mb-3 text-[#dfbd7e]" size={21} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:py-32">
        <Heart className="mx-auto mb-6 text-[#a47b43]" size={30} strokeWidth={1} />
        <p className="text-xs uppercase tracking-[0.3em] text-[#a47b43]">With love and gratitude</p>
        <h2 className="mt-6 font-serif text-5xl sm:text-7xl">
          Mahnoor <span className="italic text-[#a47b43]">&</span> Musa
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-[#79675a]">
          Your presence, prayers and blessings will make our celebrations even more special.
          We look forward to sharing these beautiful moments with you.
        </p>
        <div className="mx-auto my-8 h-px w-24 bg-[#c7a66a]" />
        <p className="font-serif text-xl italic text-[#a47b43]">Forever starts here.</p>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#a18b77]">November 2026 · Made with love</p>
      </section>

      <footer className="bg-[#201714] px-5 py-8 text-center text-white/60">
        <p className="font-serif text-xl tracking-widest text-[#dfbd7e]">MAHNOOR & MUSA</p>
        <p className="mt-3 text-xs">A beautiful beginning to forever.</p>
      </footer>
    </main>
  );
}
