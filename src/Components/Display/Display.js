import React, { useEffect, useState } from "react";
import Parse from "parse";
import { useLocation } from 'react-router-dom';
import { AddCart } from "../ItemCard/ItemCard";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Display.css'

const Display = () => {
    const { search } = useLocation()
    console.log(search, 'search')
    const [key, value] = search.replace('?', '').split('=')
    const originName = decodeURIComponent(value)
    const [curProduct, setCurProduct] = useState({})
    useEffect(() => {
        const getProduct = async() => {
            const query1 = new Parse.Query('products')
            const products = await query1.findAll()
            const product = products.find((res) => {
                return res.get('name') === originName
            })
            setCurProduct(product) 
        }
        getProduct()
    }, [originName])
    const keys = ['path', 'name', 'price', 'description']
    const keyObj = {}
    for(const key of keys) {
        keyObj[key] = curProduct?.get?.(key)
    }
    return <><Header/>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 40, marginBottom: 40}}>
        <img className="displayImg" key={0} src={keyObj.path} style={{ width: 450, height: 450 }} alt="product" />
        <div>
            {keys.map((key, index) => {
                return key === 'path' ? null : <div className="display" key={index}>{`${key}: ${keyObj[key]}`}</div>
            })}
            <div style={{ marginTop: 40 }}>
                <AddCart {...keyObj} />
            </div>
        </div>
    </div>
    <div className="footer-gap"></div>
    <Footer/>
    </>
}

export default Display