import s from "./CategoryCard.module.css"
import { Link } from "react-router-dom"


function CategoryCard(props) {
    
    
    let {way, text, link, path} = props
    
    console.log(link)
    
    return (
        <div className={s.wrapper}>
            <Link className={s.link} to={path + "items/" + link}>
                <img className={s.image} src={'http://localhost:3333' + way} alt=""/>
                <p className={s.text}>{text}</p>
            </Link>
        </div>
    )
}



export default CategoryCard