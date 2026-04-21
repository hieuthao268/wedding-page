import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  const [status, setStatus] = useState(null); // 'yes' or 'no'
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Submitted:', { status, ...formData });
    alert('Cảm ơn bạn đã xác nhận và gửi lời chúc!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto p-8 bg-white/50 backdrop-blur-sm border border-beige-dark rounded-lg shadow-sm"
    >
      <h2 className="text-2xl text-center mb-8 tracking-widest uppercase leading-tight">XÁC NHẬN THAM DỰ & GỬI LỜI CHÚC</h2>
      
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setStatus('yes')}
          className={`px-8 py-2 border transition-all ${
            status === 'yes' ? 'bg-charcoal text-white border-charcoal' : 'bg-transparent border-charcoal/30'
          }`}
        >
          CÓ
        </button>
        <button
          onClick={() => setStatus('no')}
          className={`px-8 py-2 border transition-all ${
            status === 'no' ? 'bg-charcoal text-white border-charcoal' : 'bg-transparent border-charcoal/30'
          }`}
        >
          KHÔNG
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm uppercase tracking-wider mb-2">Họ và tên:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal/20 py-2 focus:border-charcoal outline-none transition-all"
            placeholder="Tên của bạn..."
            required
          />
        </div>

        <div>
          <label className="block text-sm uppercase tracking-wider mb-2">Số lượng người tham dự:</label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full bg-transparent border-b border-charcoal/20 py-2 focus:border-charcoal outline-none transition-all"
          >
            {[1, 2, 3, 4, 5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm uppercase tracking-wider mb-2">Lời chúc của bạn (Tùy chọn):</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-transparent border border-charcoal/10 p-4 focus:border-charcoal outline-none transition-all h-24 resize-none rounded"
            placeholder="Nhập lời chúc..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-sm mt-4"
        >
          GỬI XÁC NHẬN
        </motion.button>
      </form>

      <div className="mt-12 text-center">
        <button className="text-sm uppercase tracking-[0.2em] border-b border-charcoal pb-1 hover:opacity-70 transition-all">
          GỬI MỪNG CƯỚI
        </button>
      </div>
    </motion.div>
  );
};

export default RSVPForm;
