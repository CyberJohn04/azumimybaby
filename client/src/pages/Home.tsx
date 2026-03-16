import { useState, useEffect, useRef } from 'react';
import { Music, X, ChevronDown } from 'lucide-react';
import '../styles/home.css';

/**
 * ROMANTIC BIRTHDAY WEBSITE
 * Design Philosophy: Ethereal Romance - Elegant, intimate, and magical
 * Color Palette: Soft blush pink (#FFF0F5), rose gold (#B76E79), cream white (#FFFAF0)
 * Typography: Playfair Display (headers), Lora (body), Poppins (CTAs)
 */

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [daysCount, setDaysCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);

  // ============================================================================
  // CONFIGURATION SECTION - EDIT THESE VALUES TO CUSTOMIZE YOUR WEBSITE
  // ============================================================================

  // LOVE START DATE - Change this to the date you started loving her
  const LOVE_START_DATE = new Date('2020-01-15');

  // BIRTHDAY MESSAGE - Edit this heartfelt message
  const BIRTHDAY_MESSAGE = `My Dearest Mahal,

Today is your special day, and I wanted to create something just for you. Every moment with you has been a blessing, and I'm so grateful for the love, laughter, and memories we've shared together.

You make my world brighter with your smile, warmer with your touch, and fuller with your love. I admire your strength, your kindness, and the beautiful person you are inside and out.

On this day, I celebrate not just your birthday, but the incredible woman you are and all the joy you bring into my life. Here's to another year of adventures, dreams, and endless love.

Happy Birthday, my beautiful Azumi. You mean the world to me. ❤️`;

  // PHOTO GALLERY - Replace these image URLs with your own photos
  const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500https://images.unsplash.com/photo-1516962278756-18f3c5f0b009?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1516962278756-18f3c5f0b009?w=500&h=500&fit=cropfit=crop',
    'https://imgur.com/a/xgD9o62',
    'https://imgur.com/PZ8EHDt',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500https://images.unsplash.com/photo-1507371341519-e21cc028cb29?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1507371341519-e21cc028cb29?w=500&h=500&fit=cropfit=crop',
    'https://imgur.com/jzIsdrl',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500https://images.unsplash.com/photo-1500295942863-6f3ee5c7d5a0?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1500295942863-6f3ee5c7d5a0?w=500&h=500&fit=cropfit=crop',
  ];

  // MEMORIES TIMELINE - Add your memories here
  const MEMORIES = [
    {
      date: 'January 15, 2020',
      title: 'The Day We Met',
      message: 'The moment I saw you, I knew my life would never be the same. You changed everything.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400https://images.unsplash.com/photo-1516962278756-18f3c5f0b009?w=400&h=300&fit=croph=300https://images.unsplash.com/photo-1516962278756-18f3c5f0b009?w=400&h=300&fit=cropfit=crop',
    },
    {
      date: 'June 20, 2020',
      title: 'First Kiss',
      message: 'That kiss under the stars will forever be my favorite memory. Pure magic.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',
    },
    {
      date: 'December 25, 2020',
      title: 'First Christmas Together',
      message: 'Spending the holidays with you made everything feel more meaningful and beautiful.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    },
    {
      date: 'March 10, 2021',
      title: 'Our Adventure',
      message: 'Exploring the world with you by my side is my greatest adventure and joy.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400https://images.unsplash.com/photo-1507371341519-e21cc028cb29?w=400&h=300&fit=croph=300https://images.unsplash.com/photo-1507371341519-e21cc028cb29?w=400&h=300&fit=cropfit=crop',
    },
  ];

  // BACKGROUND MUSIC - Replace with your own music URL
  // You can use free music from: https://www.bensound.com/ or https://www.zapsplat.com/
  const BACKGROUND_MUSIC_URL = 'https://www.bensound.com/bensound-music/bensound-romantic.mp3';

  // FINAL LOVE LETTER - Write your long birthday message here
  const FINAL_LOVE_LETTER = `My Most Beautiful Girl,

Happy Birthday, mahal ko. 🎉❤️

Sa araw na ito, gusto ko lang magpasalamat sa Diyos dahil ipinanganak ka. Kasi kung hindi ka ipinanganak sa mundong ito, hindi ko makikilala ang isang taong tulad mo—yung taong sobrang bait, sobrang mapagmahal, at sobrang mapag-unawa.

Alam ko na hindi ako perpektong boyfriend. Alam ko rin na minsan dahil sa sobrang selos ko o sa mga pagkukulang ko, nasasaktan kita. Pero kahit ganun, nandiyan ka pa rin. Hindi ka napapagod magpaliwanag, hindi ka sumusuko sa atin, at patuloy mo pa rin akong minamahal. At doon ko lalo nakikita kung gaano ka kahalaga sa buhay ko.

Salamat dahil ikaw yung taong nakakaintindi sa akin kahit minsan mahirap akong intindihin. Salamat sa pagiging mabait, sa pagiging mapagmahal, at sa pananatili mo sa tabi ko kahit may mga araw na hindi ako nagiging sapat.

Kung hindi ka ipinanganak, hindi ko mararanasan kung paano magmahal at mahalin ng ganito. Wala akong magiging wifey na kasing bait, kasing sweet, at kasing maintindihin mo.

Sa birthday mo, gusto ko lang iparamdam sa'yo kung gaano kita kamahal at kung gaano ako nagpapasalamat na ikaw ang girlfriend ko. Deserve mo lahat ng saya, lahat ng blessings, at lahat ng pagmamahal sa mundo.

Happy Birthday ulit, mahal ko. Sana marami pa tayong birthdays na magkasama. Mahal na mahal kita. ❤️

Forever yours,
Your Hubby ❤️`;

  // ============================================================================
  // END OF CONFIGURATION SECTION
  // ============================================================================

  // Calculate days since love started
  useEffect(() => {
    const today = new Date();
    const timeDiff = today.getTime() - LOVE_START_DATE.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    setDaysCount(daysDiff);
  }, []);

  // Toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Open lightbox
  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setShowLightbox(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Create confetti
  const createConfetti = () => {
    if (!confettiRef.current) return;
    
    setShowConfetti(true);
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.innerHTML = '❤️';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
      confetti.style.opacity = '1';
      confetti.style.position = 'fixed';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '9999';
      confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2}s ease-in forwards`;
      confetti.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
      confetti.style.setProperty('--ty', Math.random() * 200 + 100 + 'px');
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 4000);
    }

    // Also create heart bursts
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart-burst';
      heart.innerHTML = '💕';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = '24px';
      heart.style.position = 'fixed';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9998';
      heart.style.transform = 'translate(-50%, -50%)';
      
      const angle = (Math.PI * 2 * i) / 20;
      const velocity = 5 + Math.random() * 5;
      const tx = Math.cos(angle) * velocity * 100;
      const ty = Math.sin(angle) * velocity * 100;
      
      heart.style.setProperty('--tx', tx + 'px');
      heart.style.setProperty('--ty', ty + 'px');
      heart.style.animation = `heart-burst 1.5s ease-out forwards`;
      
      document.body.appendChild(heart);
      
      setTimeout(() => heart.remove(), 1500);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background music player */}
      <audio 
        ref={audioRef} 
        loop 
        src={BACKGROUND_MUSIC_URL}
        crossOrigin="anonymous"
      />

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow"
        aria-label="Toggle music"
      >
        <Music size={24} />
      </button>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663437833514/5ovH8XguSTiRujJnuyyAsR/hero-romantic-bg-B4FyCFGodjWavbPKpyQh2H.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 text-4xl floating-heart opacity-60"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 drop-shadow-lg">
            Happy Birthday My Love ❤️
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-12 font-light">
            This little website is made just for you
          </p>
          <button
            onClick={() => scrollToSection('message')}
            className="cta-button px-8 py-4 bg-accent text-accent-foreground rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 pulse-glow"
          >
            Open My Surprise
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-accent" />
          </div>
        </div>
      </section>

      {/* LOVE MESSAGE SECTION */}
      <section
        id="message"
        className="relative py-20 px-4"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663437833514/5ovH8XguSTiRujJnuyyAsR/love-message-bg-8dof7dCnaKb6J4QTR3Xpgc.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Floating hearts around message */}
          <div className="absolute left-4 top-20 text-3xl floating-heart opacity-50" style={{ animationDelay: '0s' }}>
            ❤️
          </div>
          <div className="absolute right-4 bottom-32 text-2xl floating-heart opacity-50" style={{ animationDelay: '1s' }}>
            💕
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-accent">
              A Message For You
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-line text-center font-light">
                {BIRTHDAY_MESSAGE}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section id="gallery" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Our Beautiful Moments
          </h2>
          <p className="text-center text-foreground mb-12 text-lg">
            Click any photo to view it in full size
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-2xl">💕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORIES TIMELINE */}
      <section id="timeline" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent">
            Our Love Story
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/30"></div>

            {/* Timeline items */}
            {MEMORIES.map((memory, index) => (
              <div
                key={index}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-accent font-semibold mb-2">{memory.date}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{memory.title}</h3>
                    <p className="text-foreground/80">{memory.message}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOVE COUNTER SECTION */}
      <section id="counter" className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
            Days I Have Loved You
          </h2>
          <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl p-12 shadow-xl">
            <p className="text-7xl md:text-8xl font-bold text-accent mb-4" style={{borderStyle: 'double'}}>
              {daysCount}
            </p>
            <p className="text-2xl text-foreground font-light">
              Days of endless love and beautiful memories
            </p>
            <p className="text-lg text-foreground/60 mt-6">
              And counting forever...
            </p>
          </div>
        </div>
      </section>

      {/* CONFETTI SURPRISE SECTION */}
      <section id="surprise" className="py-20 px-4 bg-card">
        <div
          className="max-w-2xl mx-auto text-center rounded-3xl p-12 shadow-xl"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663437833514/5ovH8XguSTiRujJnuyyAsR/confetti-celebration-bg-cBnsMHAHSgXP4iQxG3Vi8D.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent drop-shadow-lg" style={{color: '#994848'}}>
            Click for a Birthday Surprise
          </h2>
          <button
            onClick={createConfetti}
            className="cta-button px-8 py-4 bg-accent text-accent-foreground rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 pulse-glow"
          >
            🎉 Surprise Me! 🎉
          </button>
          <p className="text-2xl text-accent font-bold mt-8 drop-shadow-lg" style={{color: '#612929'}}>
            I Love You So Much ❤️
          </p>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section id="ending" className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-accent">
            Happy Birthday My Beautiful Girl
          </h2>

          {/* Animated hearts and sparkles */}
          <div className="flex justify-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-4xl floating-heart"
                style={{ animationDelay: i * 0.2 + 's' }}
              >
                ❤️
              </span>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-foreground leading-relaxed whitespace-pre-line text-center font-light text-lg">
              {FINAL_LOVE_LETTER}
            </p>
          </div>

          {/* Final decorative elements */}
          <div className="flex justify-center gap-6 mt-12">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-3xl floating-heart"
                style={{ animationDelay: i * 0.3 + 's' }}
              >
                ✨
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Confetti container */}
      <div ref={confettiRef}></div>
    </div>
  );
}
