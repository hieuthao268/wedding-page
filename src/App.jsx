import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import RSVPForm from './components/RSVPForm';

const Section = ({ children, className = "", fullWidth = false }) => (
  <section className={`py-20 ${fullWidth ? "" : "px-6"} ${className}`}>
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
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-sage py-8 text-center sticky top-0 z-40 backdrop-blur-md bg-sage/90">
        <h1 className="text-3xl md:text-4xl tracking-[0.3em] font-light">
          TRUNG HIEU & PHUONG THAO
        </h1>
      </header>

      {/* Intro Section */}
      <Section className="text-center bg-beige">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex justify-between items-center max-w-xs mx-auto text-[10px] tracking-[0.2em] uppercase opacity-60">
            <span>SINCE</span>
            <div className="w-12 h-px bg-charcoal" />
            <span>NOV 2022</span>
          </div>
          
          <div className="flex justify-center py-4">
            <img src="/images/5fbbafa58da397959a9a169a82f53d75.png" alt="Rings" className="w-16 h-16 opacity-80" />
          </div>

          <h2 className="text-4xl md:text-5xl leading-tight font-serif italic">
            First love, no<br/>sequel needed.
          </h2>

          <p className="max-w-xl mx-auto text-sm leading-relaxed font-light text-charcoal/80">
            Yêu nhau hơn 1200 ngày, đã cùng nhau đi qua 3 quốc gia, 10 tỉnh thành, nhưng chỉ giận nhau 4 lần...
            Và hôm nay, hai đứa quyết định làm một việc có vẻ "to tát" hơn một chút: mời mọi người đến chứng kiến một chương mới là sẽ tiếp tục đi cùng nhau... lâu hơn nữa.
          </p>
        </motion.div>
      </Section>

      {/* Hero Section */}
      <Section fullWidth className="!p-0 relative h-[30vh] md:h-[40vh] overflow-hidden">
        <img 
          src="/images/1f3293a6d3b84dfc5572b91d9989aa0f.png" 
          alt="Wedding Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-0 right-0 text-center text-white space-y-1">
          <p className="tracking-[0.5em] text-xs">MAY 2026</p>
          <p className="tracking-[0.3em] text-[10px]">#SEAYOUATTHEAISLE</p>
          <p className="tracking-[0.5em] text-xs">HA NOI</p>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-beige-dark">
        <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl tracking-widest uppercase">Timeline Lễ Cưới</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-4">
            <span className="text-[10px] tracking-widest uppercase opacity-60">Dresscode</span>
            <div className="flex gap-3 md:gap-2">
              {['#FFFFFF', '#F2E8E4', '#C9D3D2', '#FADCD9'].map((color, i) => (
                <div key={i} className="w-6 h-6 md:w-4 md:h-4 rounded-full border border-charcoal/10" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {[
            {
              title: "Tiệc Thân Mật",
              time: "15:00 | 09.05.2026",
              location: "Trung tâm Hội nghị quốc gia",
              address: "Số 57 Phạm Hùng, P. Từ Liêm, TP. Hà Nội",
              icon: "/images/2d0b56e7e51cf11036ad8734bdb67e2d.png" // Placeholder for couple icon
            },
            {
              title: "Lễ Vu Quy",
              time: "16:00 | 23.05.2026",
              location: "Đường Chùa Đào",
              address: "X. Bình Mỹ, Tỉnh Ninh Bình",
              icon: "/images/2f13672c1495255380bc3c2815bea4b5.png" // Placeholder for bride icon
            },
            {
              title: "Lễ Thành Hôn",
              time: "10:00 | 24.05.2026",
              location: "Khu 7, Trạm Trôi",
              address: "X. Hoài Đức, TP. Hà Nội",
              icon: "/images/406d195be5380723a272647434a48d11.png" // Placeholder for flower icon
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
              <div className="h-24 flex items-end justify-center mb-6">
                <img src={event.icon} alt={event.title} className="h-16 w-auto grayscale" />
              </div>
              <h3 className="text-xl font-medium">{event.title}</h3>
              <div className="space-y-2 text-sm text-charcoal/70">
                <p className="font-semibold text-charcoal">{event.time}</p>
                <p>{event.location}</p>
                <p className="text-xs">{event.address}</p>
              </div>
              <button className="flex items-center gap-2 mx-auto text-[10px] tracking-[0.2em] uppercase border-b border-charcoal/20 pb-1 mt-6 hover:opacity-70 transition-all">
                <MapPin className="w-3 h-3" /> Chỉ đường
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RSVP Section */}
      <Section id="rsvp" className="bg-sage/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden h-[500px]">
            <img src="/images/45717bd71fee87c89f0ae0037b46d708.jpg" alt="RSVP Side" className="w-full h-full object-cover" />
          </div>
          <RSVPForm />
        </div>
      </Section>

      {/* Footer Gallery */}
      <Section fullWidth className="!p-0 grid grid-cols-2 md:grid-cols-4 gap-1">
        {[
          "a2c895fe9416dd11984bca7b053b64ec.jpg",
          "7bc52b35b659ef2cc914cf6a1cd0f446.jpg",
          "6a0b6089c1a8bada8f3bef003275678e.jpg",
          "46cec36a78967c258ba70e9db6d7c593.jpg"
        ].map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden group">
            <img 
              src={`/images/${img}`} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
        ))}
      </Section>

      {/* Wishes Section */}
      <Section className="bg-beige text-center">
        <motion.div {...fadeIn} className="space-y-8">
          <h2 className="text-3xl md:text-4xl tracking-widest uppercase">Gửi lời chúc đến<br/>vợ chồng son</h2>
          <div className="max-w-xl mx-auto">
            <textarea 
              placeholder="Lời chúc của bạn..."
              className="w-full bg-transparent border border-charcoal/10 p-6 focus:border-charcoal outline-none transition-all h-32 resize-none"
            />
            <button className="w-full bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-sm mt-4">
              GỬI LỜI CHÚC
            </button>
          </div>
        </motion.div>
      </Section>

      {/* Large Bottom Image */}
      <div className="h-[30vh] md:h-[40vh] overflow-hidden">
        <img src="/images/dd4c9895c13ae54b8cb11996622c20ca.jpg" alt="Bottom Hero" className="w-full h-full object-cover" />
      </div>

      {/* Footer */}
      <footer className="bg-sage py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Countdown</h2>
        <div className="flex justify-center gap-8 md:gap-16">
          {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label, i) => (
            <div key={i} className="space-y-2">
              <span className="text-4xl md:text-5xl font-light">00</span>
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-10 border-t border-charcoal/5">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">
            Hieu & Thao • 2026
          </p>
        </div>
      </footer>

      <MusicPlayer />
    </div>
  );
}

export default App;
