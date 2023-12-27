import SaleCard from "../../components/SaleCard/SaleCard";
import s from "./ItemsPage.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';



function ItemsPage() {


    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  

    const currentPath = window.location.pathname;
    const path = parseInt(currentPath.split('').reverse().join(''))
    return ( 
        


        <>
        {data1.map(e => {
            if (e.id === path) {
                return (
                    <div className={s.wrapper}>
                        <h1 className={s.title}>{e.title}</h1>
                        <div className={s.cards}>
                            {data2.map(e => {
                                if (e.categoryId === path) {
                                    return (
                                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                                    )
                                }
                            })}
                        </div>
                    </div>   
                )
            } 
        })}  
        </>
     );
}

export default ItemsPage;