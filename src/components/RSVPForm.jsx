import React from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-full bg-white/50 backdrop-blur-sm border border-beige-dark rounded-lg shadow-sm overflow-hidden flex flex-col"
    >
      <div className="p-8 pb-4 text-center">
        <h2 className="text-2xl tracking-widest uppercase leading-tight">XÁC NHẬN THAM DỰ & GỬI LỜI CHÚC</h2>
      </div>
      
      <div className="flex-grow w-full overflow-hidden">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSd2GFIrwiMr_uRudWHcShpv6UfbDrlwYt0p4bSx1pRGagedYg/viewform?embedded=true" 
          className="w-full h-[700px] md:h-[800px]"
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="RSVP Google Form"
        >
          Loading…
        </iframe>
      </div>

      <div className="p-8 pt-4 text-center border-t border-charcoal/5">
        <button className="text-sm uppercase tracking-[0.2em] border-b border-charcoal pb-1 hover:opacity-70 transition-all">
          GỬI MỪNG CƯỚI
        </button>
      </div>
    </motion.div>
  );
};

export default RSVPForm;
