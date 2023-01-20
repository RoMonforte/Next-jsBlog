import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";


const url = 'https://simpsonsapi.up.railway.app/api/v1/characters';

const HomePage = () => {

    const [productList, setProductList] = useState([])

    useEffect(()=> {
        window
        .fetch('/api/avo')
        .then((response) => response.json())
        .then (({data, length}) => {
            setProductList(data)      
        })
    }, [])

    return (
        <div>
            <div>Hola Mundo</div>
            {productList.map((product) => (
                    <div>{product.image}</div>
            )
            )}
        </div>
    );
};

export default HomePage