import { ShoppingCart } from 'lucide-react';


function CartWidget(){
    return(
        <div className="flex items-center">
            <ShoppingCart />
            <span>0</span>
        </div>
    )
}

export default CartWidget