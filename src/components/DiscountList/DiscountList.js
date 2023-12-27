
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';
import SaleCard from '../SaleCard/SaleCard';
import s from './DiscountList.module.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function DiscountList() {


    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    const currentPath = window.location.pathname;

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <h2 className={s.title}>Sale</h2>
                {
                    (currentPath === '/') ? <Link to='discount'><Button children='All sales' className='btnCategory'/></Link> : ''                }
            </div>
            <div className={s.cards}>
            {data2.map(e => {
                if(e.discont_price != null && e.id < 10) {
                    return (
                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                    )
                } else if (currentPath === '/discount' && e.discont_price != null) {
                    return (
                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                    )
                }
            })}
            </div>
        </div>
    ) 
}

export default DiscountList;