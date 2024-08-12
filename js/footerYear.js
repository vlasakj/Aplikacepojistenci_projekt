/**
 * Skript pro nastavení aktuálního roku v patičce stránky.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Nastaví textový obsah elementu s ID "year" na aktuální rok
    document.getElementById('year').textContent = new Date().getFullYear();
});