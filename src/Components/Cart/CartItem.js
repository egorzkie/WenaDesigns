const CartItem = ({ data }) => {
    const { price, name, origin } = data
    return <div>
        <span>{name}</span>
        <span>{price}</span>
        <button onClick={async() => {
            await origin.destroy()
        }}>delete</button>
    </div>
}

export default CartItem