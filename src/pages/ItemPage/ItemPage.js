import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';
import s from "./ItemPage.module.css"
import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button'

function ItemPage() {

    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);





    const currentPath = window.location.pathname;
    const path = parseInt(currentPath.split('').reverse().join(''))
    const pathNew = parseInt(String(path).split('').reverse().join(''))


    const handleAddToOrders = () => {
        const { pathNew, addToOrders } = this.props;
        addToOrders(pathNew);
    };


    return ( 
        <>

            


            {data2.map(e => {
                if (e.id === pathNew) {
                    return (
                        <div className={s.wrapper}>
                            <img className={s.image} src={"http://localhost:3333" + e.image} alt=""/>
                            <div className={s.block}>
                                <h2 className={s.title}>{e.title}</h2>
                                <h3 className={s.price}>${e.price}</h3>
                                <div className={s.module}>
                                    <Counter/>
                                    <Button children="Add to cart" className="btnMain" onAdd={handleAddToOrders}/>
                                </div>
                                <div className={s.desc}>
                                    <h3 className={s.head}>Description</h3>
                                    <p className={s.text}>{e.description}</p>
                                    <p className={s.link}>Read more</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
            
     );
}

export default ItemPage;