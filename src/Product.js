import React, { useEffect, useState } from 'react';
import './App.css';

export default function Product(props) {
    const { onAdd } = props;
    const [api, setApi] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').
            then((response) => { return response.json() })
            .then((responsedata) => {
                console.log(responsedata);
                setApi(responsedata);
            })
            .catch((error) => {
                console.log('error', error)
            });
    }, []);


    return (
        <>
            <div className="App1"><table>
                <tr><td><h2>ID</h2></td>
                    <td><h2>CATEGORIES</h2></td>
                    <td><h2>TITLE</h2></td>
                    <td><h2>DESCRIPTION</h2></td>
                    <td><h2>IMAGE</h2></td>
                    <td><h2>PRICE</h2></td>
                </tr>
                {api.map((product) => {
                    return (
                        <tr >
                            <td style={{ padding: 35 }}><h3>{product.id}</h3> </td>
                            <td style={{ padding: 35 }}><h4>{product.category}</h4></td>
                            <td width={200} style={{ padding: 35 }}><h4>{product.title}</h4></td>
                            <td width={100} style={{ padding: 35 }}><h4>{product.description}</h4></td>
                            <td style={{ padding: 35 }}><img src={product.image} width={100} /></td>
                            <td style={{ padding: 60 }}><h3>{product.price}/-</h3></td>
                            <td><button onClick={() => onAdd(product)}>Add to Cart</button></td>
                        </tr>

                    )
                })} </table>

            </div>
        </>
    )
}
