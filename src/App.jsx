import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import MusicPlayer from './components/audio/MusicPlayer';
import RSVPForm from './components/RSVPForm';
import EventCountdown from './components/EventCountdown';

const Section = ({ children, className = "", fullWidth = false, id = "" }) => (
  <section id={id} className={`py-20 ${fullWidth ? "" : "px-6"} ${className}`}>
    {fullWidth ? (
      children
    ) : (
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    )}
  </section>
);

function App() {
  const [showQR, setShowQR] = useState(false);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-sage py-12 px-6 text-center space-y-8">
        <h1 className="text-3xl md:text-4xl tracking-[0.3em] font-light">
          TRUNG HIEU & PHUONG THAO
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-charcoal/60 border-t border-charcoal/5 pt-8 max-w-4xl mx-auto">
          <p className="tracking-[0.5em] text-base md:text-lg uppercase">MAY 2026</p>
          <p className="tracking-[0.3em] text-sm md:text-base uppercase font-semibold">#SEAYOUATTHEAISLE</p>
          <p className="tracking-[0.5em] text-base md:text-lg uppercase">HA NOI</p>
        </div>
      </header>

      {/* Intro Section */}
      <Section className="bg-beige">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-lg overflow-hidden shadow-sm"
        >
          <img 
            src="images/7bc52b35b659ef2cc914cf6a1cd0f446.jpg" 
            alt="Intro Banner" 
            className="w-full h-auto object-cover" 
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="space-y-8 text-center md:text-left">
            <div className="flex justify-between items-center max-w-xs mx-auto md:mx-0 text-[10px] tracking-[0.2em] uppercase opacity-60">
              <span>SINCE</span>
              <div className="w-12 h-px bg-charcoal" />
              <span>NOV 2022</span>
            </div>
            
            <div className="flex justify-center md:justify-start py-4">
              <img src="images/intro-ring.png" alt="Rings" className="w-16 h-16 opacity-80" />
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight font-serif italic">
              First love, no<br/>sequel needed.
            </h2>

            <p className="max-w-xl text-sm leading-relaxed font-light text-charcoal/80">
              Yêu nhau hơn 1200 ngày, đã cùng nhau đi qua 3 quốc gia, 10 tỉnh thành, nhưng chỉ giận nhau 4 lần...
              Và hôm nay, hai đứa quyết định làm một việc có vẻ "to tát" hơn một chút: mời mọi người đến chứng kiến một chương mới là sẽ tiếp tục đi cùng nhau... lâu hơn nữa.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-sm"
            >
              <img 
                src="images/45717bd71fee87c89f0ae0037b46d708.jpg" 
                alt="Intro 1" 
                className="w-full h-auto object-cover" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-sm"
            >
              <img 
                src="images/a4bf7329fe08b8e5919ac6051b434891.jpg" 
                alt="Intro 2" 
                className="w-full h-auto object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-beige-dark">
        <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl tracking-widest uppercase">Timeline Lễ Cưới</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {[
            {
              title: "Tiệc Thân Mật",
              time: "15:00 | 09.05.2026",
              date: "2026-05-09T16:00:00",
              location: "Trung tâm Hội nghị quốc gia",
              address: "Số 57 Phạm Hùng, P. Từ Liêm, TP. Hà Nội",
              icon: "images/timeline-le-than-mat-2.png",
              mapsLink: "https://maps.app.goo.gl/RjQ7QZWjBFXJ9taq6"
            },
            {
              title: "Lễ Vu Quy",
              time: "06:00 | 24.05.2026",
              date: "2026-05-23T16:00:00",
              location: "Đường Chùa Gào",
              address: "X. Bình Mỹ, Tỉnh Ninh Bình",
              icon: "images/timeline-black-white-couple.png",
              mapsLink: "https://maps.app.goo.gl/jKahCvxnMb3WjYBm8"
            },
            {
              title: "Lễ Thành Hôn",
              time: "10:00 | 24.05.2026",
              date: "2026-05-24T10:00:00",
              location: "Selena Palace",
              address: "Km 19, Đức Thượng, Hoài Đức, TP. Hà Nội",
              icon: "images/timeline-le-thanh-hon.png",
              mapsLink: "https://maps.app.goo.gl/Lxim85Ss7U6C1cXJA"
            }
          ].map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="h-32 flex items-end justify-center mb-6">
                <img src={event.icon} alt={event.title} className="h-16 w-auto grayscale text-xxl" />
              </div>
              <h3 className="text-2xl font-medium">{event.title}</h3>
              <div className="space-y-2 text-lg text-charcoal/70">
                <p className="font-semibold text-charcoal">{event.time}</p>
                <EventCountdown targetDate={event.date} />
                <p>{event.location}</p>
                <p className="text-base">{event.address}</p>
              </div>
              <a 
                href={event.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mx-auto text-[10px] tracking-[0.2em] uppercase border-b border-charcoal/20 pb-1 mt-6 hover:opacity-70 transition-all"
              >
                <MapPin className="w-3 h-3" /> Chỉ đường
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Hero Section */}
      <Section fullWidth className="!p-0 overflow-hidden bg-beige-dark">
        {/*<img 
          src="images/1f3293a6d3b84dfc5572b91d9989aa0f.png" 
          alt="Wedding Hero" 
          className="w-full h-auto object-cover max-h-[60vh]"
        />*/}
        <div className="flex flex-col justify-center items-center gap-8 py-16">
            <h2 className="text-4xl tracking-[0.3em] uppercase">Dresscode</h2>
            <div className="flex gap-4 md:gap-6">
              {['#FFFFFF', '#F2E8E4', '#C9D3D2', '#FADCD9'].map((color, i) => (
                <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-charcoal/10 shadow-sm" style={{ backgroundColor: color }} />
              ))}
            </div>
        </div>
      </Section>

      {/* RSVP Section */}
      <Section id="rsvp" className="bg-sage/20">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-lg overflow-hidden h-full min-h-[500px]">
            <img src="images/dd4c9895c13ae54b8cb11996622c20ca.jpg" alt="RSVP Side" className="w-full h-full object-cover" />
          </div>
          <RSVPForm />
        </div>
      </Section>

      {/* Gift Section */}
      <Section className="bg-white">
        <div className="text-center space-y-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl tracking-widest uppercase mb-4">Gửi Mừng Cưới</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto mb-8">
              Sự hiện diện của bạn là món quà quý giá nhất dành cho chúng mình. 
              Nếu bạn có ý định gửi quà mừng, chúng mình xin gửi thông tin tại đây.
            </p>
            <button 
              onClick={() => setShowQR(!showQR)}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              {showQR ? 'THU GỌN' : 'GỬI MỪNG CƯỚI'}
              {showQR ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </motion.div>

          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-12 pb-8">
                  <div className="space-y-4">
                    <p className="text-lg font-medium tracking-widest uppercase">QR Cô Dâu</p>
                    <div className="bg-beige/30 p-4 rounded-xl">
                      <img 
                        src="images/image-qr-co-dau.png" 
                        alt="QR cô dâu" 
                        className="w-full max-w-[300px] mx-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg font-medium tracking-widest uppercase">QR Chú Rể</p>
                    <div className="bg-beige/30 p-4 rounded-xl">
                      <img 
                        src="images/image-qr-chu-re.png" 
                        alt="QR chú rể" 
                        className="w-full max-w-[300px] mx-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Footer Gallery */}
      <Section className="bg-beige-dark/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Left (Desktop) / First (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] md:aspect-square overflow-hidden group md:row-start-1 md:col-start-1 rounded-xl shadow-md"
          >
            <img 
              src="images/a6e5cf7c8d80b3001aa2fc9b3bfb4781.jpg" 
              alt="Gallery 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </motion.div>

          {/* Bottom Left (Desktop) / Second (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-[4/3] md:aspect-square overflow-hidden group md:row-start-2 md:col-start-1 rounded-xl shadow-md"
          >
            <img 
              src="images/d5cc79b0aa59e4fa99b234b40c554b9f.jpg" 
              alt="Gallery 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </motion.div>

          {/* Right Side Spanning Both Rows (Desktop) / Third (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[4/3] md:aspect-auto md:row-start-1 md:row-span-2 md:col-start-2 overflow-hidden group rounded-xl shadow-md"
          >
            <img 
              src="images/6a0b6089c1a8bada8f3bef003275678e.jpg" 
              alt="Gallery 3" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </motion.div>

          {/* Below All (Desktop) / Fourth (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 aspect-[16/9] md:aspect-[21/9] overflow-hidden group rounded-xl shadow-md"
          >
            <img 
              src="images/46cec36a78967c258ba70e9db6d7c593.jpg" 
              alt="Gallery 4" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </motion.div>
        </div>
      </Section>

      {/* Large Bottom Image */}
      <Section className="!pt-0 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm">
            <img 
              src="images/a2c895fe9416dd11984bca7b053b64ec.jpg" 
              alt="Bottom Hero" 
              className="w-full h-auto max-h-[125vh] object-cover object-bottom" 
            />
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-sage py-20 text-center">
        <div className="pt-10 border-t border-charcoal/5">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">
            Hieu & Thao • 2026
          </p>
        </div>
      </footer>

      <MusicPlayer 
        src="/wedding-page/audio/wedding-theme.mp3" 
        songTitle="Ordinary" 
        artistName="Alex Warren" 
      />
    </div>
  );
}

export default App;
