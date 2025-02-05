import React from "react";
import { Stack, Box } from "@mui/material";
import { categories } from "../../context/constants";
import { MdOutlineKeyboardArrowLeft , MdOutlineKeyboardArrowRight} from "react-icons/md";
import "./highlights.css";
const Highlights = (props) => {

 
  return (
    <Stack
      direction="row" 
      sx={props.showNav ? { marginLeft: "200px" } : { marginLeft: "85px" }}
      className="flex items-center w-[350px] sm:w-[450px] lg:w-[700px] xl:w-[1450px]"
    > 
 <MdOutlineKeyboardArrowLeft size={50} onClick={props.leftSwiper} />
      <Box id = 'swiper' ref={props.swiperRef} className="h-[50px] ml- w-auto box overflow-x-scroll scroll scroll-smooth  whitespace-nowrap scrollbar-none">
             {categories.map((category, id) =>(
                 <button key={id} className="mr-10 w-auto rounded-md "
                
                 style={{background: category.name === props.selectedCategory && '#FC1503' 
                }}
                onClick={()=>{props.setSelectedCategory(category.name)}}
                 >
                 <span className="mr-2">{category.icon}</span>
                 <span>{category.name}</span>
                </button>
             ))}
      </Box>
      <MdOutlineKeyboardArrowRight  size={50}  onClick={props.rightSwiper} />
    </Stack>
  );
};

export default Highlights;

/* 
d />
k />
*/
