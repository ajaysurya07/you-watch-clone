import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = React.useState('')
  const onhandleSubmit =(e) =>{
    e.preventDefault();
   /*  props.handlesearch() */
    if (searchTerm) {
     navigate(`/search/${searchTerm}`);
     console.log(searchTerm); 
     setSearchTerm('');
   }
}  

 /*  console.log(selectedCategory); */
  return (
    <div className="subContainer gap-5 ">
    <form
      action="search_bar"
      className="subContainer  bg-shade  border-none   center "
      onSubmit={onhandleSubmit}
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        required
        autoFocus
        className="h-10 w-[590px] p-4 bg-black "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <CiSearch className="icon w-[30px]" />
    </form>
    <MdKeyboardVoice className="h-10 w-10 p-2 rounded-[20px] bg-shade " />
  </div>
  )
}

export default SearchBar