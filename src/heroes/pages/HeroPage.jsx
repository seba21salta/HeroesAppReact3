import {  Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

 
 
 export const HeroPage = ()=> {

     const navigate = useNavigate()    
     const params = useParams();
     const {id} = params;
     
     const hero = useMemo(() => getHeroById (id), [id]);
     
     const onNavigateBack = () => {
       return navigate(-1)};
     
         if(!hero){
             return <Navigate to="/marvel"/>
           };
   

      const {superhero, publisher, alter_ego, first_appearance, characters} = hero;

     
     return(
       <div className="row mt-5  animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img src={process.env.PUBLIC_URL + `/assets/heroes/${id}.jpg`} alt={superhero} className="img-thumbnail" />
          </div>
          <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
              <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
              <li className="list-group-item"> <b>First appearance:</b> {first_appearance} </li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p>{characters}</p>

            <button className="bn btn-outline-primary" onClick={onNavigateBack}>
              Back
            </button>

          
        </div>
       </div>

     )
 }