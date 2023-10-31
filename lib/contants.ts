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

export const services = [
    {
      title: "Free Shipping",
      tagline: "From all orders over $5",
      image: "/service.png",
    },
  
    {
      title: "Daily Surprise Offers",
      tagline: "Save upto 25% off",
      image: "/service-02.png",
    },
    {
      title: "Support 24/7",
      tagline: "Shop with an expert",
      image: "/service-03.png",
    },
    {
      title: "Affordable Prices",
      tagline: "Get Factory Default Price",
      image: "/service-04.png",
    },
    {
      title: "Secure Payments",
      tagline: "100% Protected Payment",
      image: "/service-05.png",
    },
  ];

export const trusteData = [
  {
    title: "trusted 1",
    image: "/brand-01.png"
  },
  {
    title: "trusted 2",
    image: "/brand-02.png"
  },
  {
    title: "trusted 3",
    image: "/brand-03.png"
  },
  {
    title: "trusted 4",
    image: "/brand-04.png"
  },
  {
    title: "trusted 5",
    image: "/brand-05.png"
  }
]