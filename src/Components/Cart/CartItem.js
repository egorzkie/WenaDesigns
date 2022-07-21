import './Cart.css'

const CartItem = ({ data }) => {
    const { price, name, path, origin } = data
    return <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around', alignItems: 'center', margin: 20, borderBottom: '1px solid black', padding: 20 }}>
    <img className="product-image" src={path} alt="" style={{ width: 200, height: 200}} />
    <div style={{display:'flex', flexDirection: 'column'}}>
        <span className="cart-text">{name}</span>
        <span className="cart-text">${price}</span>
        <button className="btn" onClick={async() => {
            await origin.destroy()
        }}>Delete</button>
    </div>
    </div>
}

export default CartItem