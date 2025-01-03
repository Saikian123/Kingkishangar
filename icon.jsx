import { MdHome } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { VscIssueReopened } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";

import { RiAccountCircleLine } from "react-icons/ri";
import './icons.css'

function Ico(){
  return(
    <div className="mobile-grid">
    
        <div> 
          <MdHome />Home
        </div>
        <div> 
          <BiCategoryAlt />Catergoies
        </div>
        <div> 
          <VscIssueReopened />Reorder
        </div>
        <div> 
          <BsCart3 />Cart
        </div>
        <div> 
          <RiAccountCircleLine />Account
        </div>
      

    </div>

  )
}
export default Ico;