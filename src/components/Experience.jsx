import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../style";
import { experiences } from "../Constant/constant";
import WrapperComponent from "./Hoc/WrapperComponents";
import { textVariant } from "../utils/motion";

const Experience = () => {
  const ExperienceCard = ({ key, experiences }) => {
    return (<VerticalTimelineElement
      contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experiences.bg }}
    >
      <div>
        <h3 className="font-bold text-[24px]">{experiences.title}</h3>
        <ul className="my-3">
          {experiences.points.map((item, idx) => {
            return (<li key={idx} className="text-white text-[14px] tracking-wider">
              {item}
            </li>)
          })}
        </ul>
        <a href={experiences?.link} className="bg-secondary p-2 rounded-xl my-2 text-black cursor-pointer">Go To Website</a>
      </div>
    </VerticalTimelineElement>)
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Project's</p>
        <h2 className={`${styles.sectionHeadText}`}>What I have Build</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((item, index) => {
            return (<ExperienceCard key={index} experiences={item} />)
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default WrapperComponent(Experience, "work")