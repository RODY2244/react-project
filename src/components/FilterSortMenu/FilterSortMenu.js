
import s from "./FilterSortMenu.module.css"





function FilterSortMenu() {
    return ( 
        <div className={s.wrapper}>
            <div className={s.block}>
                <p className={s.text}>Price</p>
                <input className={s.inputOne} type="text" placeholder="from"/>
                <input className={s.inputTwo} type="text" placeholder="to"/>
            </div>
            <div className={s.block}>
                <p className={s.text}>Discounted items</p>
                <input className={s.check} type="checkbox"/>
            </div>
            <div className={s.block}>
                <p className={s.text}>Sorted</p>
                <select className={s.select}>
                    <option className={s.opt} value='default'>by default</option>
                    <option className={s.opt} value='ascending'>by ascending</option>
                    <option className={s.opt} value='reducing'>by reducing</option>
                </select>
            </div>
        </div>
     );
}

export default FilterSortMenu;