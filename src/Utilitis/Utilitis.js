import { toast } from "react-toastify";

const getMarksRead=()=>{
    const strogeStr=localStorage.getItem('read-list');
    if(strogeStr){
        const savedred=JSON.parse(strogeStr);
        return savedred;
    }
    else{
        return []
    }
}

const addToMarksRead=id=>{
    const strogeSet=getMarksRead(id);
    if(strogeSet.includes(id)){
        toast.warning("all raad exsit")
    }
    else{
        strogeSet.push(id);
        const savedred=JSON.stringify(strogeSet);
        localStorage.setItem('read-list', savedred)
        toast.success('Read success')
    }
}

const getWistlis=()=>{
    const strogeSrt=localStorage.getItem('waist-list');
    if(strogeSrt){
        const savedSet=JSON.parse(strogeSrt)
        return savedSet;
    }
    else{
        return []
    }
}
const addToWistlis=id=>{
    const stogeSet=getWistlis(id);
    if(stogeSet.includes(id)){
        toast.warning("all raad exsit")
    }
    else{
        stogeSet.push(id);
        const savedSet=JSON.stringify(stogeSet);
        localStorage.setItem('waist-list',savedSet)
        toast.success('Read success')
    }
}
export {addToMarksRead,addToWistlis,getMarksRead,getWistlis}