import { useState } from "react";
import HeaderComponent from "./component/header";

export default function HeaderContainer(props){
    const [searchInputShow,setSearchInputShow]=useState(false);
    const [input,setInput]=useState("");
    const handleInput=(item)=>{
        setInput(item.target.value);
    }
    const search=()=>{
        setSearchInputShow(searchInputShow?false:true);
        if(input!=""){
            alert('ok');
            setInput('');
        }
    }
    return <HeaderComponent search={search} input={input} handleInput={handleInput} searchInputShow={searchInputShow}>
        
    </HeaderComponent>
}