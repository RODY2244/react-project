
import s from "./Geolocation.module.css"





function Geolocation() {






    return (
        <div>
            <div className={s.wrapper}><iframe className={s.map} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20115093+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>
        </div>
    )
}


export default Geolocation