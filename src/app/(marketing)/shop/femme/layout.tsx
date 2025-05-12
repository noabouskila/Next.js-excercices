export default function FemmeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="container" style={{backgroundColor : 'lightblue'}}>
      <h1>section : FEMMES (Layout)</h1>
          {children}
     </div>
      
     
          
        
    );
  }