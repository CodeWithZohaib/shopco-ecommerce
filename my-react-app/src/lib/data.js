// Category page products data matching the Figma design
export const categoryProducts = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discount: null,
    image: "/images/wear.jpeg",
    rating: 3.5,
    reviewCount: 88,
    colors: [
      { name: "Multicolor", value: "#FF6B6B", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    originalPrice: null,
    discount: null,
    image: "/images/polo.jpeg",
    rating: 4.5,
    reviewCount: 88,
    colors: [
      { name: "Pink", value: "#FF69B4", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    discount: 25,
    image: "/images/wear2.jpeg",
    rating: 5.0,
    reviewCount: 88,
    colors: [
      { name: "Black", value: "#000000", image: "/api/placeholder/295/298" },
      { name: "White", value: "#FFFFFF", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    image: "/images/Trousers.jpeg",
    rating: 3.5,
    reviewCount: 88,
    colors: [
      { name: "Blue", value: "#1E40AF", image: "/api/placeholder/295/298" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    category: "casual"
  },
  {
    id: 5,
    name: "Faded Skinny Jeans",
    price: 180,
    originalPrice: null,
    discount: null,
    image: "/images/jeans.jpeg",
    rating: 4.5,
    reviewCount: 88,
    colors: [
      { name: "Red", value: "#DC2626", image: "/api/placeholder/295/298" },
      { name: "Blue", value: "#1E40AF", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 6,
    name: "Loose Fit Bermuda Shorts",
    price: 130,
    originalPrice: 160,
    discount: 30,
    image: "/images/shorts.jpeg",
    rating: 4.5,
    reviewCount: 88,
    colors: [
      { name: "Orange", value: "#F97316", image: "/api/placeholder/295/298" },
      { name: "Black", value: "#000000", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    image: "/images/sh1.jpeg",
    rating: 5.0,
    reviewCount: 88,
    colors: [
      { name: "Green", value: "#059669", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discount: null,
    image: "/images/sh2.jpeg",
    rating: 4.0,
    reviewCount: 88,
    colors: [
      { name: "Orange", value: "#F97316", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discount: null,
    image: "/images/shorts.jpeg",
    rating: 3.0,
    reviewCount: 88,
    colors: [
      { name: "Blue", value: "#1E40AF", image: "/api/placeholder/295/298" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    category: "casual"
  }
];

// Your existing product data (for product detail page)
export const products = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    reviewCount: 451,
    colors: [
      { name: "Olive", value: "#6B7D3A", image: "/images/one-life front.jpeg" },
      { name: "Black", value: "#000000", image: "/api/placeholder/400/500" },
      { name: "Navy", value: "#1E3A8A", image: "/api/placeholder/400/500" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/one-life front.jpeg",
      "/images/one-life back.jpeg",
      "/images/closeup.jpeg",
      "/images/one-life folded.jpeg"
    ],
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
  }
];

export const relatedProducts = [
  {
    id: 2,
    name: "Black Floral and Slogan T-shirt",
    price: 212,
    originalPrice: 242,
    rating: 4.0,
    image: "/images/product/productImg.jpeg"
  },
  {
    id: 3,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image:  "/images/product/productImg2.jpeg"
  },
  {
    id: 4,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image:  "/images/product/productImg3.jpeg"
  },
  {
    id: 5,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    rating: 5.0,
    image:  "/images/product/productImg4.jpeg"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 5,
    date: "August 14, 2023",
    comment: "I absolutely love this t-shirt! The design is unique and the fabric feels amazing. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    verified: true
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    date: "August 15, 2023",
    comment: "The shirt design is nice but the sizing was a bit off. I usually wear medium but this one fits like a small. The quality is good though.",
    verified: true
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 5,
    date: "August 16, 2023",
    comment: "This t-shirt is a must-have for anyone who appreciates good design. The colors are vibrant and the print quality is top-notch. Highly recommend!",
    verified: true
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4,
    date: "August 17, 2023",
    comment: "As a UI/UX designer myself, I'm quite picky about aesthetics. This shirt doesn't disappoint. Great color, comfortable fit. Just wish it came in more sizes.",
    verified: true
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 5,
    date: "August 18, 2023",
    comment: "This t-shirt is fantastic! The quality is outstanding, and the design is super stylish. Perfect for casual days or when I want to make a statement.",
    verified: true
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 5,
    date: "August 19, 2023",
    comment: "I'm thrilled with this purchase! The fabric is soft, the fit is perfect, and the design is exactly what I was looking for. Will definitely buy more!",
    verified: true
  }
];

export const categories = [
  { id: 1, name: "Casual", slug: "casual", count: 156 },
  { id: 2, name: "Formal", slug: "formal", count: 89 },
  { id: 3, name: "Party", slug: "party", count: 67 },
  { id: 4, name: "Gym", slug: "gym", count: 43 }
];

export const priceRanges = [
  { id: 1, label: "$50 - $100", min: 50, max: 100 },
  { id: 2, label: "$100 - $200", min: 100, max: 200 },
  { id: 3, label: "$200 - $300", min: 200, max: 300 },
  { id: 4, label: "$300+", min: 300, max: null }
];

export const colors = [
  { id: 1, name: "Green", value: "#00C12B", hex: "#00C12B" },
  { id: 2, name: "Red", value: "#F50606", hex: "#F50606" },
  { id: 3, name: "Yellow", value: "#F5DD06", hex: "#F5DD06" },
  { id: 4, name: "Orange", value: "#F57906", hex: "#F57906" },
  { id: 5, name: "Blue", value: "#06CAF5", hex: "#06CAF5" },
  { id: 6, name: "Purple", value: "#7D06F5", hex: "#7D06F5" },
  { id: 7, name: "Pink", value: "#F506A4", hex: "#F506A4" },
  { id: 8, name: "White", value: "#FFFFFF", hex: "#FFFFFF" },
  { id: 9, name: "Black", value: "#000000", hex: "#000000" }
];

export const sizes = [
  { id: 1, label: "XX-Small", value: "XXS" },
  { id: 2, label: "X-Small", value: "XS" },
  { id: 3, label: "Small", value: "S" },
  { id: 4, label: "Medium", value: "M" },
  { id: 5, label: "Large", value: "L" },
  { id: 6, label: "X-Large", value: "XL" },
  { id: 7, label: "XX-Large", value: "XXL" },
  { id: 8, label: "3X-Large", value: "3XL" },
  { id: 9, label: "4X-Large", value: "4XL" }
];

export const dressStyles = [
  { id: 1, name: "Casual", count: 156 },
  { id: 2, name: "Formal", count: 89 },
  { id: 3, name: "Party", count: 67 },
  { id: 4, name: "Gym", count: 43 }
];