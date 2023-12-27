import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../../store/thunks';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoryList.module.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



function CategoryList() {
    
    const dispatch = useDispatch();
    const { data1, data2 } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    const currentPath = window.location.pathname;
    return (
        <div className={s.wrapper}>
        <div className={s.block1}>
            <h2 className={s.title}>Categories</h2>
            {
                (currentPath === '/') ? <Link to="/category">
                <Button children="All categories" className='btnCategory'/>
            </Link> : ''
            }
        </div>
        <div className={s.block2}>
        {data1.map(e => {
                if (e.id < 5) {
                    return (
                        <CategoryCard way={e.image} text={e.title} link={e.id} path='/category/'/>
                    )
                } else if ( e.id < 6 && currentPath === '/category') {
                    return (
                        <CategoryCard way={e.image} text={e.title} link={e.id} path=''/>
                    )
                }
            })}
        </div>
        </div>
     );
}

export default CategoryList;