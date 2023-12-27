


import CategoryList from '../../components/CategoryList/CategoryList';
import DiscountList from '../../components/DiscountList/DiscountList';
import MainPromo from '../../components/MainPromo/MainPromo';
import SaleForm from "../../components/SaleForm/SaleForm"


function MainPage() {




    return ( 
      <>
        <MainPromo/>
        <CategoryList/>
        <SaleForm/>
        <DiscountList/>
      </>
     );
}

export default MainPage;