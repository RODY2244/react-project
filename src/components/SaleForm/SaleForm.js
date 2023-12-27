import Button from '../Button/Button'
import s from "./SaleForm.module.css"




function SaleForm() {





    return(


        <div className={s.wrapper}>
            <h2 className={s.title}>5% off on the first order</h2>
            <div className={s.block}>
                <img className={s.image} src="images/image.svg" alt=""/>
                <form className={s.form}>
                    <input placeholder='Name' className={s.input} type="text"/>
                    <input placeholder='Phone Number' className={s.input} type="text"/>
                    <input placeholder='Email' className={s.input} type="text"/>
                    <Button children="Get a discount" className='btnForm'/>
                </form>
            </div>
        </div>
    )
}



export default SaleForm