import { Button } from "@material-tailwind/react";
import Sidebar from "../components/Sidebar";
import metamaskIcon from "../assets/icons/metamask-logo.png"
const HomePage = () => {
    return (
        
 
        
            // <div className="flex flex-col ">
            //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi, itaque nam enim optio sequi. Labore, minima delectus velit accusantium, ad distinctio facilis molestias sit beatae ullam rerum, maiores facere?</p>
            // </div>
           
 <div className="flex flex-row">
        <Sidebar/>
                <div className="flex flex-col items-center gap-4 right-0">
                  <Button size="lg" color="white" className="flex items-center gap-3">
                    <img src={metamaskIcon} alt="metamask" className="h-6 w-6" />
                    Connect Wallet
                  </Button>
                 
                </div>
             </div>
    
    )
}

export default HomePage