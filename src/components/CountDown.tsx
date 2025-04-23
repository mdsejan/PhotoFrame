import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  return {
    days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
  };
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 text-center"
        >
          <div className="text-3xl sm:text-4xl font-bold text-blue-600">
            {value}
          </div>
          <div className="mt-1 text-sm sm:text-base text-gray-600 capitalize">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePageCTA = () => {
  const eventDate = "2025-05-11T24:00:00";

  return (
    <div className="bg-white py-16 px-6 sm:px-8">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DGHS's first <span className="text-blue-600">Alumni Reunion</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          After 84 years, the reunion is here! Reconnect with old friends at
          <br />
          Dhunat Government Naim Uddin Pilot Model High School.
        </motion.p>

        <motion.div
          className="bg-[#E76767] text-white font-semibold text-lg sm:text-xl py-2 px-6 rounded-lg mb-6 mx-auto max-w-[320px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          🎯 <span className="text-lg sm:text-xl">Registration ends in:</span>
        </motion.div>

        <CountdownTimer targetDate={eventDate} />

        <div className="mt-24">
          <a
            href="https://reunion.dghsaa.org/register"
            target="_blank"
            className="bg-yellow-400 text-gray-700 font-semibold py-3 px-12 md:px-24 rounded-full text-sm sm:text-lg hover:bg-yellow-500 transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageCTA;
