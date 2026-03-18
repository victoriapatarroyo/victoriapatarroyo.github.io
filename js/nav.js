/**
 * @fileoverview Manejo del menú de navegación responsivo.
 *
 * Controla la apertura y cierre del menú hamburguesa en pantallas móviles.
 * Gestiona el overlay, la animación del botón y el cierre al hacer clic
 * en un enlace de navegación.
 *
 * @author Victoria Eugenia Patarroyo
 * @version 1.0.0
 */

/**
 * Botón hamburguesa que activa y desactiva el menú de navegación.
 * @type {HTMLButtonElement}
 */
const toggle = document.getElementById("navToggle");

/**
 * Lista de enlaces del menú de navegación.
 * @type {HTMLUListElement}
 */
const links = document.getElementById("navLinks");

/**
 * Overlay oscuro que aparece detrás del menú cuando está abierto.
 * @type {HTMLDivElement}
 */
const overlay = document.getElementById("navOverlay");

/**
 * Cierra el menú de navegación móvil.
 *
 * Elimina las clases activas del menú, el overlay y el botón hamburguesa,
 * y actualiza el atributo aria-expanded para accesibilidad.
 *
 * @returns {void}
 */
function closeMenu() {
  links.classList.remove("open");
  overlay.classList.remove("show");
  toggle.setAttribute("aria-expanded", "false");
  toggle.classList.remove("active");
}

/**
 * Alterna la apertura y cierre del menú al hacer clic en el botón hamburguesa.
 *
 * Añade o elimina las clases CSS que controlan la visibilidad del menú
 * y del overlay, y sincroniza el atributo aria-expanded.
 *
 * @listens HTMLButtonElement#click
 */
toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  overlay.classList.toggle("show", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.classList.toggle("active", isOpen);
});

/**
 * Cierra el menú cuando el usuario hace clic sobre el overlay.
 *
 * @listens HTMLDivElement#click
 */
overlay.addEventListener("click", closeMenu);

/**
 * Cierra el menú cuando el usuario hace clic en cualquier enlace de navegación.
 * Permite que el scroll hacia la sección ocurra sin que el menú permanezca abierto.
 *
 * @listens HTMLAnchorElement#click
 */
document.querySelectorAll(".nav-link-item").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
