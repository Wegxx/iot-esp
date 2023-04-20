import React, {FunctionComponent} from "react";
import {ISkill} from "@/type";
import {motion} from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({data:{level, name},}) => {
    return (
        <div className=" my-4 flex-col-reverse flex text-white bg-gray-300 rounded-full">
            <motion.div className="flex font-roboto items-center px-4 py-1 rounded-full bg-gradient-to-t from-cyan-100 to-blue-400"
                        initial={{height:0}}
                        animate={{
                            height: level,
                            transition: {duration:0.4, type: "spring", damping: 10, stiffness: 100}
                        }}
            >
                {name}
            </motion.div>
        </div>
    )

}

export default Bar