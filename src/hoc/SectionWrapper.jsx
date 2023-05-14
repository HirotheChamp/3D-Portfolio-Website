import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

// HOC stands for: higher order component
// this wrapper can be applied to components to add framer motion animations as the section is loading on screen
const SectionWrapper = (Component, idName) => 
function HOC(){
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
       <Component/> 
    </motion.section>
  )
}

export default SectionWrapper