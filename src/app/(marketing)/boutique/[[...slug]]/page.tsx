import { parseEnv } from "util";

interface Shop {
    params: { id: string  ,
        slug : [] ,
    };
  }

export default function Shop({params} : Shop){

   const concataineted = params.slug ?   params.slug.join('/') : null
    return (
        <div  className="container">
           { params.slug && <span className="breadcrumb">{concataineted }</span> 
           }

            <h1>Notre Boutique</h1>
            
            
        </div>
    ) 
}