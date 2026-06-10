import { Children, createContext, useEffect , useState } from "react";

export const AuthContext = createContext();
const Authprovider = ({children}) => {
     const [scroll, setScroll] = useState(false);
     useEffect(() => {
          const handleScroll = () => {
               if(window.scrollY > 5){
                    setScroll(true)
               }else{
                    setScroll(false)
               };
          };
          window.addEventListener("scroll",handleScroll);

          return () => {
               window.removeEventListener("scroll", handleScroll);
          }; 
     },[])
     const name = ""
     

     const value = {
          name,
          scroll
     }
     return(
          <AuthContext.Provider value={value}>
               {children}
          </AuthContext.Provider>
     )
};
export default Authprovider;