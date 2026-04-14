const toggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("nav-mobile-menu");

if (toggle && mobileMenu) {
	toggle.addEventListener("click", () => {
		const isOpen = !mobileMenu.classList.contains("hidden");
		mobileMenu.classList.toggle("hidden", isOpen);
		mobileMenu.classList.toggle("flex", !isOpen);
		toggle.setAttribute("aria-expanded", String(!isOpen));
	});
}
