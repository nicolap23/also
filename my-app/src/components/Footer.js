import React from 'react'
import styles from '../styles/footer.css'

export default function Footer() {
  return (
    <div>
                <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
            <h3>Acerca de Nosotros</h3>
            <p>Somos una tienda especializada en bicicletas, dedicada a ofrecer las mejores bicicletas y accesorios para todos los ciclistas.</p>
            </div>
            
            <div class="footer-section">
            <h3>Contacto</h3>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@bicitienda.com</p>
            <p>Dirección: Calle Bicicleta 123, Ciudad</p>
            </div>
            <div class="footer-section">
            <h3>Síguenos</h3>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
            </div>
        </div>
        <p class="footer-bottom">&copy; 2024 BiciTienda. Todos los derechos reservados.</p>
        </footer>
            
    </div>
  )
}
