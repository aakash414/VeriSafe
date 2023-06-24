/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

function LandingPage({handleConnect}) {
    
    const handleConnectClick = () => {
      handleConnect();
    };
  
    return (
          
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" color="white" className="flex items-center gap-3">
                <img src="/icons/metamask.svg" alt="metamask" className="h-6 w-6"  onClick={handleConnectClick}/>
                Connect Wallet
            </Button>
            
        </div>
    );
  }
  
  export default LandingPage;