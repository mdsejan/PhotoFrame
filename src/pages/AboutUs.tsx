import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - DGHS Reunion 2025</title>
      </Helmet>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ধুনট সরকারি <span className="text-blue-500">নইম উদ্দিন</span>{" "}
              পাইলট মডেল উচ্চ বিদ্যালয়
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ১৯৪১ সাল থেকে আজ পর্যন্ত জ্ঞানপিপাসুদের কাছে প্রিয় একটি
              প্রতিষ্ঠান। এর সংস্পর্শে এসে হাজারো শিক্ষার্থী দেশ ও বিদেশে
              জ্ঞানের অসাধারণ নৈপুণ্য, সৃজনশীলতা, জাতীয় নেতৃত্ব, ব্যবসা-বাণিজ্য
              তথা বিভিন্ন ক্ষেত্রে নিজেদের প্রতিভার স্বাক্ষর রেখে যাচ্ছেন।
              <br />
              <br />
              এবার সময় এসেছে সময়ের কাটা পেছনে ঘুরিয়ে পৃথিবীর বিভিন্ন কোণে ছড়িয়ে
              থাকা শিক্ষার্থীদের প্রিয় স্কুলে ফিরে এসে কৈশোর-যৌবনের সেই দিনগুলো
              ফিরিয়ে আনার।
              <br />
              <br />
              DGHS পুনর্মিলনী-২০২৫ এর মাধ্যমে আমরা মিলিত হবো আমাদের প্রিয় স্কুল
              প্রাঙ্গণে।
              <br />
              📅 তারিখঃ <strong>০৯ জুন ২০২৫ ইং, রোজ: সোমবার</strong>।<br />
              📋 অনুষ্ঠানসূচী: পরবর্তীতে জানিয়ে দেয়া হবে।
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                রেজিস্ট্রেশন ফি
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ✅ অংশগ্রহণকারী রেজিস্ট্রেশন: <strong>১০০০/-</strong>
                <br />✅ অতিথি রেজিস্ট্রেশন: <strong>১০০০/-</strong>
                <br />
                <br />
                <em>
                  ※ অতিথি বলতে বাবা-মা, স্বামী-স্ত্রী, সন্তান এবং ব্যক্তিগত
                  গাড়ির ড্রাইভার বোঝানো হয়েছে।
                </em>
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                রেজিস্ট্রেশন প্রক্রিয়া
              </h3>
              <p className="text-gray-700 leading-relaxed">
                🖥️ <strong>অনলাইন</strong>: রেজিস্ট্রেশন করতে ভিজিট করুন -{" "}
                <a
                  href="https://reunion.dghsaa.org/register"
                  className="text-blue-600 underline"
                >
                  Reg link
                </a>
                <br />
                🏢 <strong>অফলাইন বুথ</strong>:<br />
                • স্কুল রেজিস্টার
                <br />
                • ধুনট পাবলিক লাইব্রেরি
                <br />
                • খান ডেকোরেটর, সোনামুখি রোড
                <br />
                • ইছামতী ডায়াগনস্টিক, কলেজ রোড
                <br />
                <br />✅ নিজ নিজ ব্যাচ প্রতিনিধির সাথেও যোগাযোগ করা যাবে।
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                যোগাযোগ ও পরামর্শ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                📞 আঁখিনূর জামান বকুল
                <br />
                ☎️ 01677 48 63 69
                <br />
                🎓 ব্যাচ: ১৯৯৯
                <br />
                📧 Email: dghsreunion2025@gmail.com
                <br />
                <br />
                রেজিস্ট্রেশনের শেষ সময়: <strong>১২ মে ২০২৫ ইং</strong>
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg">
              📌 বিস্তারিত জানতে ভিজিট করুন:
              <br />
              <a
                href="https://www.facebook.com/profile.php?id=61574710355241"
                className="text-blue-600 underline"
              >
                DGHS Reunion & Alumni Association Page
              </a>{" "}
              |
              <a
                href="https://www.facebook.com/groups/671667635233107"
                className="text-blue-600 underline ml-2"
              >
                Facebook Group
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
