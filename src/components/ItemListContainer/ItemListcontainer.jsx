import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader";

const productos = [
      {
        id: 3,
        nombre: "Campera Nike",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKwyEQ3cixfOuhJpvkGQy6fMQo1Nqmh-LA&usqp=CAU",
        precio: 15000,
        categoria: "Camperas",
      },
      {
        id: 4,
        nombre: "Remera Nike NSW",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1116058-500-500/REMERA-NIKE-NSW-TEE-FUTURA-BOXY-NINO.jpg?v=637946133589800000",
        precio: 8000,
        categoria: "Remeras",
      },
      {
        id: 5,
        nombre: "Remera Nike DF WR",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1115421-500-500/REMERA-NIKE-DF-WR-MILER-GX1-SS.jpg?v=637944577530230000",
        precio: 7000,
        categoria: "Remeras",
      },
      {
        id: 8,
        nombre: "Remera Adidas doodle",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1120117-500-500/REMERA-ADIDAS-DOODLE-EMBLEM-.jpg?v=637989302300270000",
        precio: 5000,
        categoria: "Remeras",
      },
      {
        id: 11,
        nombre: "Remera Nike Jordan",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1095450-500-500/REMERA-NIKE-JORDAN-JUMPMAN-.jpg?v=637727759509900000",
        precio: 13000,
        categoria: "Remeras",
      },
      {
        id: 12,
        nombre: "Buzo Puma Power",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1120363-500-500/BUZO-PUMA-POWER-COLORBLOCK-HOODIE-TR-.jpg?v=637994621238000000",
        precio: 23000,
        categoria: "Buzos",
      },
      {
        id: 13,
        nombre: "Campera Puma Train",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1118063-500-500/CAMPERA-PUMA-TRAIN-FULL-ZIP-.jpg?v=637970479176600000",
        precio: 19000,
        categoria: "Camperas",
      },
      {
        id: 14,
        nombre: "Buzo Puma ColorBlock",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1116196-500-500/BUZO-PUMA-POWER-COLORBLOCK-HOODIE-TR-.jpg?v=637947151115400000",
        precio: 17000,
        categoria: "Buzos",
      },
      {
        id: 15,
        nombre: "Campera Puma Evostripe",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1091896-500-500/CAMPERA-PUMA-EVOSTRIPE-CORE-FZ-HOODIE.jpg?v=637699840141500000",
        precio: 12000,
        categoria: "Camperas",
      },
      {
        id: 16,
        nombre: "Zapatillas Topper Boro",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1084979-500-500/ZAPATILLAS-TOPPER-BORO-II.jpg?v=637620551856500000",
        precio: 9000,
        categoria: "Zapatillas",
      },
      {
        id: 17,
        nombre: "Zapatillas DC Pensford",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1117839-500-500/GA180002194.jpg?v=637966065811870000",
        precio: 26000,
        categoria: "Zapatillas",
      },
      {
        id: 18,
        nombre: "Zapatillas Puma Graviton",
        img: "https://redsport.vteximg.com.br/arquivos/ids/1116343-500-500/ZAPATILLAS-PUMA-GRAVITON-ADP.jpg?v=637947795488300000",
        precio: 18000,
        categoria: "Zapatillas",
      }
]

function ItemListContainer() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
              setLoading(false)
                resolve(productos);
            }, 2000);
        });
        if (categoriaId) {
          getData.then(res => setData(res.filter(productos => productos.categoria === categoriaId)));
        }
        else {
          getData.then(res => setData(res));
        }
    }, [categoriaId])

    const mensaje= 'Envios a todo el país!'

    const onAdd = (count) => {
        console.log(`El usuario agregó ${count} productos al carrito`);
    }

    return (
        <>
        <Title greeting={mensaje}/>
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        {
        loading ? 
        <Loader/>
        :
        <div className="product__list">
        <ItemList data={data}/>
        </div>
        }
        </>
    );
}

export default ItemListContainer;