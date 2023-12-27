import { Link } from "react-router-dom"
import s from  "./SaleCard.module.css"





function SaleCard(props) {

    let {way, name, price, id, flag} = props


    return (
        <> 
        {
            (flag === null) ? <Link className={s.link} to={"/item" + "/" + id}>
            <div className={s.card}>
                <img className={s.image} src={'http://localhost:3333' + way} alt=""/>
                <div className={s.wid}>
                    <button className={s.btn}>Add to cart</button>
                </div>
                <h3 className={s.title}>{name}</h3>
                <p className={s.text}>${price}</p>
            </div>
            </Link> : <Link className={s.link} to={"/item" + "/" + id}>
            <div className={s.card}>
                <img className={s.image} src={'http://localhost:3333' + way} alt=""/>
                <div className={s.monitor}>{Math.floor(((price - flag) / ((price + flag / 2)) * 100))}%</div>
                <div className={s.wid}>
                    <button className={s.btn}>Add to cart</button>
                </div>
                <h3 className={s.title}>{name}</h3>
                <div className={s.priceBlock}>
                    <p className={s.text}>${flag}</p>
                    <p className={s.textprice}>${price}</p>
                </div>
            </div>
            </Link>
        }
        </>
    )
}


export default SaleCard