
import { useEffect, useState } from 'react'
import './cat.css'
const Cats = () => {
    const [cat, setCat] = useState(false);
    async function search() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
                "method": "Get"
            })
            const data = await response.json();



            setCat(

                {

                    newData: data[0].url

                }


            )

        } catch (error) {
            console.log(error);
        }


    }


    useEffect(() => {
        search();
    }, []);


    return (
        <>
            <div>
                <button onClick={search} >Search</button>
            </div>
            <div>
                <img src={cat.newData}></img>
            </div>
        </>



    )
}


export default Cats