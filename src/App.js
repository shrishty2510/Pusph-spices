import './App.css';
// import { Header1 } from "./Mycomponents/Header1";
import { Main } from "./Mycomponents/Main";
import  {Footer1} from "./Mycomponents/Footer1";
import { About } from "./Mycomponents/About";
import {Pusphcategory } from "./Mycomponents/Pusphcategory";
import { Product_page } from './Mycomponents/Product_page';
import { Product_page2 } from './Mycomponents/Product_page2';
import { Product_page3 } from './Mycomponents/Product_page3';
import {Munimjimasale } from "./Mycomponents/Munimjimasale";
import  {Contact} from "./Mycomponents/Contact";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Quickfry } from './Mycomponents/Quickfry';
import PusphProduct from './Mycomponents/PusphProduct';
import {Navbarmenu} from './Mycomponents/Navbarmenu'




function App() {
  return (
    <Router>
     <div>
      <Navbarmenu/>
      {/* < Header1 /> */}
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route  path='/about' element={< About />}></Route>
          <Route  path='/contact' element={< Contact />}></Route>
          <Route  path='/pushp_category' element={< Pusphcategory />}></Route>
          <Route  path='/pushp_product/:category_name' element={< PusphProduct />}></Route>
          <Route  path='/product_page/pusph_masale/:product_name/:product_id' element={< Product_page />}></Route>
          <Route  path='/product_page/munimji_masale/:product_name/:product_id' element={< Product_page2 />}></Route>
          <Route  path='/product_page/quick_fry/:product_name/:product_id' element={< Product_page3 />}></Route>
          <Route  path='/munimji_masale' element={< Munimjimasale />}></Route>
          <Route  path='/quickfry' element={< Quickfry />}></Route>
        </Routes>
        <Footer1 />
     </div>
    </Router>


  );
}

export default App;
