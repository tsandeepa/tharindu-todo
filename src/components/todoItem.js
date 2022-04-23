import { motion } from "framer-motion"

const TodoItem = ({toDoId,toDoTitle,handleClose}) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
        
      }

    return ( 
        <>
        <div className="item-popup" onClick={handleClose}></div>
        <motion.div  
                initial="hidden"
                animate="visible"
                variants={variants}>
                    <div className="popup-panel">
                        <div className="popup-content">
                            <h3>Your To Do </h3>
                            <p>List id is {toDoId}</p>
                            <h3>{toDoTitle}</h3>
                            <button onClick={handleClose}>Close</button>

                        </div>
                        
                    </div>
                    
            </motion.div>
        </>
        
     );
}
 
export default TodoItem;