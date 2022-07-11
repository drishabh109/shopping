import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function H(props) {
    const { onAdd } = props;
    const param = useParams();
    const {categories } = param;
    const [api, setApi] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products'). 
            then((response) => { return response.json() })
            .then((responsedata) => {
                console.log(categories);
                console.log(responsedata);
                let result = responsedata.filter(item => item.category === categories);
                console.log(result); 
                setApi(result);
            })
            .catch((error) => {
                console.log('error', error)
            });
    }, []);

    return (
        <div className="App1"><table>
            <tr>
                <td><h2>CATEGORIES</h2></td>
                <td><h2>TITLE</h2></td>
                <td><h2>DESCRIPTION</h2></td>
                <td><h2>IMAGE</h2></td>
                <td><h2>PRICE</h2></td>
            </tr>
            {api.map((product, index) => {
                return (
                    <tr> 
                <td style={{padding:15} }><h4>{product.category}</h4></td>
                <td width={200} style={{padding:15} }><h4>{product.title}</h4></td>
                <td width={400} style={{padding:15} }><h4>{product.description}</h4></td>
                <td style={{padding:15} }><img src={product.image} width={100}/></td>
                <td style={{padding:60} }><h3>{product.price}/-</h3></td>
                <td><button onClick={() => onAdd(product)}>Add to Cart</button></td>
                </tr>
                )
            })} </table>
        </div>
    )
}