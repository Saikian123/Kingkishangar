import VegetableCards from "./Components/Div1";
import VegetableCard2 from "./Components/Div2";
import ExploreCategory1 from "./Components/DryFruits";
import ExploreCategory from "./Components/Explore";
import Slideshow from "./Components/Slideshow";
import TopBar from "./Components/TopBar";
import Ico from "./icon";
import {BrowserView} from 'react-device-detect';
import {isMobile} from 'react-device-detect';
const App = () => {
  
  if(isMobile){
      return (
        <div> This content is available only on mobile</div>
    )
  }
  return (
    <div style={{ position:"relative"}} >
                 <marquee  
        style={{
          color: "blue",
          backgroundColor: "orange",
          fontSize: "20px",
          padding: "2px",
      
        }}
      >

          Exceting news ! we have lanchued our new brand website      </marquee>
         <div> {isMobile?<h1>jngfm</h1>:<p>no a mobile</p>}</div>
<BrowserView>
    <div>
      <TopBar /> {/*Include the TopBar component*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Slideshow/> {/* Include the Slideshow in a container */}
      </div>
      <div>
        <h2> Organic Vegatbles </h2>
        <VegetableCards/>
      </div>
      <div>
        <h2> Organic Fruits </h2>
        <VegetableCard2/>
      </div> 

      <div>
        <h2> Explore Catergoies </h2>
        <ExploreCategory/>
      </div>

     <div>
        <h2> DryFruits </h2>
        <ExploreCategory1/>
      </div> 
     
    </div>
    </BrowserView>
    {/* <MobileView> */}
        <Ico/>
    {/* </MobileView> */}
    render()
    
    </div>
  );
};

export default App;



