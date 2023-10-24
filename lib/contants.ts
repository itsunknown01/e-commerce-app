interface NavLink {
    label: string;
    url: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "Cart", url: "/cart" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
];
