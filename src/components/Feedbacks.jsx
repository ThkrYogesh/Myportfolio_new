import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementsCard = ({ index, achievement, date }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white tracking-wider text-[18px]">{achievement}</p>
    <p className="mt-4 text-secondary text-[14px]">{date}</p>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Journey</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementsCard
            key={index}
            achievement={achievement.achievement}
            date={achievement.date}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
