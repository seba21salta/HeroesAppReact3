 import {Routes, Route} from "react-router-dom"

import { HeroesRoutes }  from '../heroes/routes/HeroesRoutes'  //"../heroes"  
import { LoginPage } from'../auth/pages/LoginPage'  //"../auth" 



export const AppRouter = ()=> {
    return(
        <>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>

                <Route path="/*" element={<HeroesRoutes/>}/>
            </Routes>
        </>
    )
} 