// import { notFound } from "next/navigation"

// export default function NotFound(){

//     return (
//         <div className="container">
//             <h1 className="text-center"> 404 | Cette page est introuvable!</h1>
//             <p className="text-center">Nous avons seument 100 articles à afficher </p>
//         </div>
//     )
// }

import { FC } from "react";

const NotFound: FC = () => {
    return (
        <div className="container">
            <h1 className="text-center">404 | Cette page est introuvable!</h1>
            <p className="text-center">Nous avons seulement 100 articles à afficher.</p>
        </div>
    );
}

export default NotFound;