'use client'

import { usePathname } from "next/navigation"  
import {  PencilSquareIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import  {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
export default function NavLinks() {


    const links = [
        { name: "Accueil", href: "/", icon: HomeIcon }, 
        { name: "Inscriptiion", href: "/signup" , icon: PencilSquareIcon },
        { name: "Connexion", href: "/login" , icon: ArrowLeftOnRectangleIcon}
    ]
       
   
    const pathname = usePathname(); // retourne  un string



    return (
        
       <div>
            {links.map((link) => {    

                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                    <Link 
                     href={link.href}
                      key={link.name}
                      className={ isActive ? "nav-link active text-align-center" : "nav-link   display-flex " }

                      >
                      
                        {Icon && <Icon  style={{ width : '25px' }} />}
                        {link.name}
                      </Link>
                )
             })
            }
       </div> 
       
    );
}