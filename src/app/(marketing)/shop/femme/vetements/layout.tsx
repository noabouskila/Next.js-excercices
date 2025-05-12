export default function VetementsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="container" style={{backgroundColor : 'green'}}>
      <h1>VETEMENTS (Layout)</h1>
          {children}
     </div>
      
     
          
        
    );
  }