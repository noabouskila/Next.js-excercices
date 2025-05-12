
export const metadata = {
    title: 'Auth Layout',
    description: 'Authentication pages layout',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
       
        <div className="auth-layout">
            <p> Authentification</p>
            {children}
        </div>
          
    );
}