import { motion } from "framer-motion";

const Events = () => {
  const scheduleItems = [
    "Reception",
    "Take seat",
    "Quran recitation and Gita reading",
    "National flag hoisting & anthem",
    "Joy rally",
    "Breakfast",
    "Donor group gift presentation",
    "Teacher honorary crest",
    "Memorial speech",
    "Lunch",
    "Cultural events",
    "Raffle draw",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
          Events Schedule
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A full day of joy and connection — here’s the flow of the reunion to
          help you enjoy every moment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:scale-[1.015]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07 * index }}
            >
              <div className="flex items-center gap-4">
                <div className="text-white bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold shrink-0">
                  {index + 1}
                </div>
                <h4 className="text-base font-medium text-gray-800">{item}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
