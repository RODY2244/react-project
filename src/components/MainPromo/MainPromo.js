import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import ButtonMain from '../Button/Button'
import s from "./MainPromo.module.css"





function MainPromo() {





    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
            <Link to='/allitems'>
                <Button children='Check out' className='btnMain'/>
            </Link>
        </div>
    )
} 


export default MainPromo