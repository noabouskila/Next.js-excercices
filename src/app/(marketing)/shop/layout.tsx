export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="container">
    <h1>Notre Boutique (Layout) </h1>
        {children}
   </div>
    
   
        
      
  );
}