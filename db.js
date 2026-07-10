const menus = [
    // Drinks
    {
        name: 'Coffee',
        category: 'Drinks',
        description: 'The best coffee you can have from the land of Indonesia',
        variants: [
            { price: 20000, description: 'Americano', stock: 10 },
            { price: 35000, description: 'Latte', stock: 7 }
        ],
        photoUrl: 'assets/coffee.jpg'
    },
    { name: 'Espresso', category: 'Drinks', description: 'Intense single shot of espresso', variants: [{ price: 15000, description: 'Single', stock: 20 }], photoUrl: 'assets/espreso.jfif' },
    { name: 'Cappuccino', category: 'Drinks', description: 'Creamy cappuccino with foam', variants: [{ price: 32000, description: 'Regular', stock: 18 }], photoUrl: 'assets/blog-cappuccino-at-home-without-machine-cover_07fd68f6-6fb9-4a51-b35e-a0fd94a2c2ca.webp' },
    { name: 'Mocha', category: 'Drinks', description: 'Chocolate and espresso blended', variants: [{ price: 37000, description: 'Regular', stock: 12 }], photoUrl: 'assets/Mocha-1fc71f7.png' },
    { name: 'Flat White', category: 'Drinks', description: 'Velvety milk with espresso', variants: [{ price: 34000, description: 'Regular', stock: 10 }], photoUrl: 'assets/Flat-White-d195a5f.png' },
    { name: 'Cold Brew', category: 'Drinks', description: 'Slow-steeped smooth cold brew', variants: [{ price: 28000, description: 'Tall', stock: 14 }], photoUrl: 'assets/cold brew.webp' },
    { name: 'Iced Latte', category: 'Drinks', description: 'Chilled latte over ice', variants: [{ price: 36000, description: 'Tall', stock: 16 }], photoUrl: 'assets/iced latte.jfif' },
    { name: 'Matcha Latte', category: 'Drinks', description: 'Ceremonial matcha with milk', variants: [{ price: 33000, description: 'Regular', stock: 9 }], photoUrl: 'assets/iced-matcha-latte.jpg' },
    { name: 'Ginger Tea', category: 'Drinks', description: 'Warming ginger infusion', variants: [{ price: 18000, description: 'Cup', stock: 20 }], photoUrl: 'assets/ginger-tea.jpg' },
    { name: 'Seasonal Wine', category: 'Drinks', description: 'A great meal becomes perfect when combined with a good wine', variants: [{ price: 50000, description: 'Glass', stock: 20 }, { price: 100000, description: 'Bottle', stock: 30 }], photoUrl: 'assets/wine.jpg' },

    // Meals
    { name: 'Triple Cheese Pizza', category: 'Meals', description: 'Indulge yourself in this simple yet delicious delicacy', variants: [{ price: 80000, description: 'Slice', stock: 5 }], photoUrl: 'assets/pizza.jpg' },
    { name: 'Chicken Sandwich', category: 'Meals', description: 'Grilled chicken, fresh greens, artisan bread', variants: [{ price: 45000, description: 'Regular', stock: 12 }], photoUrl: 'assets/chicken sandwich.jfif' },
    { name: 'Beef Burger', category: 'Meals', description: 'Juicy beef patty with melted cheese', variants: [{ price: 65000, description: 'Single', stock: 10 }], photoUrl: 'assets/beef burger.jpg' },
    { name: 'Veggie Wrap', category: 'Meals', description: 'Seasonal vegetables with pesto', variants: [{ price: 38000, description: 'Wrap', stock: 15 }], photoUrl: 'assets/veggie wrap.jfif' },
    { name: 'Spaghetti Bolognese', category: 'Meals', description: 'Classic slow-cooked ragu', variants: [{ price: 62000, description: 'Plate', stock: 8 }], photoUrl: 'assets/bolognese.jfif' },
    { name: 'Grilled Salmon', category: 'Meals', description: 'Pan-seared salmon with lemon butter', variants: [{ price: 95000, description: 'Plate', stock: 6 }], photoUrl: 'assets/salmon.jfif' },
    { name: 'Caesar Salad', category: 'Meals', description: 'Crisp romaine, anchovy dressing, parmesan', variants: [{ price: 42000, description: 'Regular', stock: 10 }], photoUrl: 'assets/cesar salad.jfif' },
    { name: 'Premium Omelette', category: 'Meals', description: 'Fluffy omelette with choice of fillings', variants: [{ price: 30000, description: 'Single', stock: 14 }], photoUrl: 'assets/French-Omelette-with-sourdough-bread-mixed-salad.jpg' },
    { name: 'Pancake Stack', category: 'Meals', description: 'Buttery pancakes with maple syrup', variants: [{ price: 35000, description: 'Stack', stock: 12 }], photoUrl: 'assets/pancake.jfif' },

    // Snacks
    { name: 'Nacho Crunch', category: 'Snacks', description: 'Crispy tortilla chips with cheesy topping', variants: [{ price: 25000, description: 'Regular', stock: 10 }], photoUrl: 'assets/Nacho crunch.webp' },
    { name: 'Mini Donuts', category: 'Snacks', description: 'Soft fried donuts with a sweet glaze', variants: [{ price: 22000, description: 'Box', stock: 8 }], photoUrl: 'assets/minidonuts.webp' },
    { name: 'Fries Basket', category: 'Snacks', description: 'Golden fries served hot and crispy', variants: [{ price: 20000, description: 'Regular', stock: 12 }], photoUrl: 'assets/fries basket.jfif' },

    // Desserts
    { name: 'Mini Brownie', category: 'Desserts', description: 'A rich, gooey dessert with a soft center and sweet finish', variants: [{ price: 15000, description: 'Classic', stock: 12 }], photoUrl: 'assets/mini brownie.jpg' },
    { name: 'Chocolate Cake', category: 'Desserts', description: 'Decadent layered chocolate cake', variants: [{ price: 45000, description: 'Slice', stock: 8 }], photoUrl: 'assets/chocolate-poke-cake-3.webp' },
    { name: 'Tiramisu', category: 'Desserts', description: 'Coffee-soaked ladyfingers and mascarpone', variants: [{ price: 48000, description: 'Slice', stock: 6 }], photoUrl: 'assets/05COOKING-TIRAMISU1-googleFourByThree-v2.jpg' },
    { name: 'Cheesecake', category: 'Desserts', description: 'Creamy cheesecake with a biscuit base', variants: [{ price: 47000, description: 'Slice', stock: 7 }], photoUrl: 'assets/New-York-cheesecake-with-no-water-bath-and-raspberry-coulis.jpg' },
    { name: 'Fruit Tart', category: 'Desserts', description: 'Seasonal fruits on custard and pastry', variants: [{ price: 40000, description: 'Piece', stock: 10 }], photoUrl: 'assets/fruit tart.jfif' },
    { name: 'Ice Cream Scoop', category: 'Desserts', description: 'Single scoop of house-made ice cream', variants: [{ price: 18000, description: 'Strawberry', stock: 20 }, { price: 13000, description: 'Blueberry', stock: 25 }, { price: 15000, description: 'Vanilla', stock: 20 }], photoUrl: 'assets/ice cream sccope.webp' },
    { name: 'Croissant', category: 'Desserts', description: 'Buttery flaky croissant, baked daily', variants: [{ price: 22000, description: 'Piece', stock: 18 }], photoUrl: 'assets/croisant.jfif' },
    { name: 'Banana Bread', category: 'Desserts', description: 'Moist banana bread with walnuts', variants: [{ price: 25000, description: 'Slice', stock: 12 }], photoUrl: 'assets/banana bread.jfif' },
    { name: 'Panna Cotta', category: 'Desserts', description: 'Silky panna cotta with berry coulis', variants: [{ price: 32000, description: 'Portion', stock: 9 }], photoUrl: 'assets/Panna-Cotta-1200px-inside-the-rustic-kitchen-1-500x500.webp' }
];