import React,{ useEffect , useState } from 'react'

const DataWithUseEffect = () => {
    const [advice, setAdvice] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadingMassage =<h1><p>data is loading</p></h1>;
    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(
           
            (res)=>{
                if (!res.ok) {
                    throw Error("fetch data is error")
                }
                return res.json()
            })
        .then(
            (data)=>{
                setAdvice(data);
                setLoading(false)
                setError(null)
            })  
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
        })    
      }, 1000);  

    } , [] );
    const todoAliment =advice &&
    advice.map((add)=>{
       return <p key={add.id} > {add.title} </p>
    });
    return (
        <div>
            <h1>This data form api</h1>
            {error && <p> {error} </p> }
            {isLoading && loadingMassage}
            {todoAliment}
        </div>
    )
}

export default DataWithUseEffect
