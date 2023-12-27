import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";
import { Provider } from "react-redux"
import { store } from "../../store/store";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function App() {
    return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
     );
}

export default App;