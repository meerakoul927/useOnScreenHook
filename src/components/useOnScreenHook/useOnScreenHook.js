import React ,{useState , useEffect} from 'react'

function useOnScreenHook(props) {

    const {ref} =props;
    const [isVisible , setIsVisible] = useState(false);

    useEffect(()=>{
     const observer = () =>{
          const offset = 50;
          const top = ref?.current?.getBoundingClientRect()?.top;
          console.log("value inside the top" , top);
          setIsVisible(offset+top > 0 && top-offset < window.innerHeight());
     }
     observer();

     window.addEventListener('scroll' , observer);
     return ()=>{
          window.removeEventListener('scroll' , observer);
     }

    },[]);
  
     return isVisible;
  
}

export default useOnScreenHook