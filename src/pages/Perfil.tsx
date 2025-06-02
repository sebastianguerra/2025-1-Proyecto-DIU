import MobileNav from "@/components/layout/navigation/mobile_navigation";
function Perfil(){
    return(
        <div className="profile-container">
            <h1>Perfil</h1>
            
            <div className="user-info">
                <h2>Nombre Apellido</h2>
                <p><strong>Comuna:</strong> Santiago </p>
                <p><strong>Dirección:</strong> Calle Siempre Viva 742 </p>
            </div>
            
            <div className="contact-info">
                <h3>Contactos</h3>
                <p><strong>Celular:</strong> +56 9 XXXX XXXX</p>
                <p><strong>Correo:</strong> miCorreo@gmail.com </p>
            </div>
            <MobileNav></MobileNav>
        </div>
    )
}

export default Perfil;