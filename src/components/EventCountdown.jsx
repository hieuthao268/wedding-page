import React, { useState, useEffect } from 'react';

const EventCountdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        setTimeLeft({ ...timeLeft, isOver: true });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isOver: false
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isOver) {
    return <div className="text-[10px] tracking-widest text-sage-dark uppercase font-semibold">Đang diễn ra / Đã kết thúc</div>;
  }

  return (
    <div className="flex justify-center gap-3 pt-2">
      {[
        { label: 'D', value: timeLeft.days },
        { label: 'H', value: timeLeft.hours },
        { label: 'M', value: timeLeft.minutes },
        { label: 'S', value: timeLeft.seconds },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-lg font-light leading-none">{unit.value.toString().padStart(2, '0')}</span>
          <span className="text-[8px] opacity-40 font-bold">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default EventCountdown;
