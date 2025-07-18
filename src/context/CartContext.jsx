import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isCartOpen, setCartOpen] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda]= useState("")
    

    useEffect(() => {
        fetch('https://68368ad2664e72d28e412cb1.mockapi.io/productos-ecommerce/productos')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
            localStorage.setItem("cart",JSON.stringify(cart))
    }, [])

    if (error) {
        return <NotFound />
    }

    const productosFiltrados = productos.filter((producto)=> producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  const handleAddtoCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item));
        } else {
            toast.success(`El producto ${product.nombre} se ha agregado al carrito`)
            setCart([...cart, { ...product, cantidad: 1 }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        toast.error('Producto eliminado del carrito.')
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    } else {
                        return null
                    }
                } else {
                    return item
                }
            }).filter(item => item != null)
        })
    }

    const clearCart =()=>{
        setCart([])
        localStorage.removeItem("cart")
        toast.info('Se ha finalizado la compra.')
    }

    return (
        <CartContext.Provider 
        value={{
            cart, productos, cargando, error, handleAddtoCart, handleDeleteFromCart,isAuthenticated,setIsAuth,clearCart, productosFiltrados, busqueda, setBusqueda
        }}>
            {children}
        </CartContext.Provider>
    )
}