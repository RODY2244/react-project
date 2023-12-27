import s from "./Contact.module.css"








function ContactInfo() {



    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Contact</h2>
            <div className={s.wrap}>
            <div className={s.block}>
                <div className={s.item}>
                    <p className={s.text}>Phone</p>
                    <h3 className={s.head}>+7 (499) 350-66-04</h3>
                </div>
                <div className={s.item}>
                    <p className={s.text}>Address</p>
                    <h3 className={s.head}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.item}>
                    <p className={s.text}>Socials</p>
                    <div className={s.images}>
                        <img className={s.image} src="images/inst.svg" alt=""/>
                        <img className={s.image} src="images/whats.svg" alt=""/>
                    </div>
                </div>
                <div className={s.item}>
                    <p className={s.text}>Working Hours</p>
                    <h3 className={s.head}>24 hours a day</h3>
                </div>
            </div>
            </div>
            
        </div>
    )
}


export default ContactInfo