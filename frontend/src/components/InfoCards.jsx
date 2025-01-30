import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function InfoCards() {
  const cards = [
    {
      title: "ASSIGNMENTS",
      desc: "Access your courses, submit assignments on time, and track your progress effortlessly.",
      img: "/assignment-icon.png",
    },
    {
      title: "ANNOUNCEMENTS",
      desc: "Stay updated with important notifications, deadlines, and college news in one place.",
      img: "/announcements-icon.png",
    },
    {
      title: "COMMUNITY",
      desc: "Connect with peers & educators, join discussions, and collaborate on projects easily.",
      img: "/community-icon.png",
    },
  ];

  return (
    <div className="w-full h-[200px] relative">
      <div className="absolute top-[-100px] left-0 w-full flex flex-col justify-center h-full">
        <div className="flex flex-wrap md:px-7 justify-center md:justify-between w-full gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center w-[280px] md:w-[320px]"
            >
              <img src={card.img} alt={card.title} className="w-12 h-12 mb-3" />
              <p className="font-bold text-xl text-white">{card.title}</p>
              <p className="text-sm text-gray-300 text-center">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
