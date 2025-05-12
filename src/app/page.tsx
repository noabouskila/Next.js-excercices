/////////////////
// pour transformer un composant server par client  (next a ses composants server par defaut)
"use client"
//////////////////
import styles from '@/app/ui/home.module.css'
import { useState } from "react";
import clsx from "clsx";
import Image from 'next/image';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false)


  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  // si true => class button-hovered sinon la class button sera appliquée 
  const buttonClasses = clsx('button', { 'button-hovered': isHovered && typeof window !== "undefined" })



  {/* gestion images */ }
  const cars = [
    {
      id: 1,
      name: "voiture-blanche"
    },
    {
      id: 2,
      name: "voiture-bleue"
    },
    {
      id: 3,
      name: "voiture-jaune"
    },
    {
      id: 4,
      name: "voiture-noire"
    },
    {
      id: 5,
      name: "voiture-rouge"
    },
    {
      id: 6,
      name: "voiture-verte"
    }
  ]



  return (

    <>
      {/* <h1>Mon Appli Next ! </h1>

      <h2>Simple Css Style</h2>

      <table>
        <thead>
          <tr>
            <th>Entête 1</th>
            <th>Entête 2</th>
            <th>Entête 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donnée 1</td>
            <td>Donnée 2</td>
            <td>Donnée 3</td>

          </tr>
        </tbody>
      </table>


      <h2 className="text-blue-500">Tailwind Css Style</h2>

      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"></div> */}


      {/* css avec modules  */}
      {/* <div className={styles.shape}></div> */}

      {/* css avec clsx  */}
      {/* <button
        className={buttonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        hover dessus
      </button> */}


      {/* gestion images */}

      {/* {
        cars.map(img => {
          return ( 
            <div key={img.id}> */}
              {/* <img src={`/${img.name}.jpg`} alt={img.name} width='100%' height='100%' /> */}

              {/* avec lelement integré  de Next : Image  4 props requis src , width , height , alt  */} 
              {/* <Image
              src={`/${img.name}.jpg`}
              alt={img.name}
              width={1920}
              height={1440}
              placeholder='blur'
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
              >
              </Image>  */}
              
            {/* </div>
          )
        })
      } */}

    <article>
      <h2>Bienvenue sur note site !</h2>
    </article>

    </>
  );
}
