import SaleCard from "../../components/SaleCard/SaleCard";
import s from "./AllItemsPage.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';
import FilterSortMenu from "../../components/FilterSortMenu/FilterSortMenu";



function ItemsPage() {


    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  


    
    return ( 
        
        <>
                    <div className={s.wrapper}>
                        <h1 className={s.title}>AllItemsPage</h1>
                        <FilterSortMenu/>
                        <div className={s.cards}>
                            {data2.map(e => {
                                    return (
                                        <SaleCard way={e.image} name={e.title} price={e.price} id={e.id} flag={e.discont_price}/>
                                    )
                            })}
                        </div>
                    </div>   
                
        </>
     );
}

export default ItemsPage;