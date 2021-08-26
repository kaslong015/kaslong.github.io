import { useState, useEffect  } from "react";

const useFetch = (url) =>{

    const [data,setData] = useState(null)
    const [ispending,setIsPending] = useState(true)
    const [error , setError] = useState(null);


    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then(res => {

                if(!res.ok){
                    throw Error ('fail to tetch data')
                }else{
                    return res.json()
                }  
                              
            }).then((data)=>{  

                setData(data)
                setIsPending(false)
                setError(null)

            }).catch((error) => {

                setError(error.message)
                setIsPending(false)
            })
        },1000)   
    },[url])
    return {data , ispending, error}
}

export default useFetch ;