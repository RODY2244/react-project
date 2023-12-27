import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import s from './ShopBasketNone.module.css'



function ShopBasketNone() {
    return ( 
        <div className={s.wrapper}>
            <div className={s.block}>
                <h1 className={s.title}>ShoppingCart</h1>
                <Link to='/'>
                    <Button children="Back to the store" className="btnCategory"/>
                </Link>
            </div>
            <p className={s.text}>Looks like you have no items in your basket currently.</p>
            <Link to='/'>
                <Button children="Continue Shopping" className="btnMain"/>
            </Link>
        </div>
     );
}

export default ShopBasketNone;