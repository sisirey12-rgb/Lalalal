

/* ===== Existing RATAN application logic (preserved) ===== */

const IMG = {"ramen": "assets/food-ramen.webp", "interior": "assets/food-interior.webp", "table": "assets/food-table.webp", "food": "assets/food-food.webp", "team": "assets/food-team.webp", "artist": "assets/food-artist.webp", "cigar": "assets/food-cigar.webp", "jhol": "assets/food-jhol.webp", "momos": "assets/food-momos.webp", "wings": "assets/food-wings.webp", "pasta": "assets/food-pasta.webp", "khao": "assets/food-khao.webp", "tempura": "assets/food-tempura.webp", "chilly": "assets/food-chilly.webp", "logo": "assets/ratan-logo.webp", "heroWok": "assets/ratan-hero.png"};
IMG.ratanHero = "assets/ratan-hero.png";
const CONFIG = {
  restaurant: "RATAN Chinese Family Bar and Restaurant",
  legalName: "Ratan Family Restaurant & Bar",
  whatsappNumber: "919175112217",           // international format, digits only
  phones: ["+91 91751 12217", "+91 72649 10427"],
  address: ["H.No.15/163/2, Shop No. 1 & 2", "Opp. Petrol Pump, Dando", "Caranzalem 403004"],
  email: "PLACEHOLDER@example.com",
  instagram: "https://www.instagram.com/ratanchinese_goa",
  zomato: "https://www.zomato.com/goa/ratan-restaurant-and-bar-caranzalem",
  swiggy: "",
  mapsUrl: "https://maps.app.goo.gl/Pyvav81unhEJxuJQ8",
  currency: "₹",
    // Hero slideshow: each slide uses a landscape food photo (a key from IMG). One slide = no indicators.
  heroSlides: [
    {img: "ratanHero", alt: "RATAN Chinese original hero image", pos: "center center"}
  ],
  heroTagline: ["Wok-tossed flavours.", "Made for sharing."]
};
// Each item: label = text shown; price = number used for totals (null = "To be confirmed"); view = not orderable online.
const MENU = [{"id": "i1", "cat": "Specials", "sub": "Specials", "name": "Veg / Non Veg Burmese Khao Suey", "desc": "A harmony of Burmese flavours", "price": null, "label": "₹299 / ₹350", "img": "khao", "featured": false, "view": false}, {"id": "i2", "cat": "Specials", "sub": "Specials", "name": "Ramen Noodle Soup (Non-veg)", "desc": "One bowl. Zero regrets.", "price": 350, "label": "₹350", "img": "ramen", "featured": true, "view": false}, {"id": "i3", "cat": "Specials", "sub": "Specials", "name": "Prawns Cigar Roll", "desc": "Crispy outside. Savory inside.", "price": 290, "label": "₹290", "img": "cigar", "featured": true, "view": false}, {"id": "i4", "cat": "Specials", "sub": "Specials", "name": "Momo - Chicken", "desc": "Steamy, juicy, irresistible.", "price": 160, "label": "₹160", "img": "momos", "featured": false, "view": false}, {"id": "i5", "cat": "Specials", "sub": "Specials", "name": "Jhol Momo", "desc": "Taste the tradition", "price": 200, "label": "₹200", "img": "jhol", "featured": true, "view": false}, {"id": "i6", "cat": "Specials", "sub": "Specials", "name": "BBQ Chicken Wings", "desc": "Bold flavour in every bite", "price": 290, "label": "₹290", "img": "wings", "featured": false, "view": false}, {"id": "i7", "cat": "Specials", "sub": "Specials", "name": "White Sauce Pasta", "desc": "Creamy and cheesy", "price": 299, "label": "₹299", "img": "pasta", "featured": false, "view": false}, {"id": "i8", "cat": "Specials", "sub": "Specials", "name": "Tempura Prawns", "desc": "Golden bites of pure delight", "price": 290, "label": "₹290", "img": "tempura", "featured": false, "view": false}, {"id": "i44", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Manchow Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i45", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Hot & Sour Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i46", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Noodles Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i47", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Burmese Chicken Soup", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i48", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Fried Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i49", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Schezwan Fried Rice", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i50", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Mushroom Fried Rice", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i51", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Triple Schezwan Rice", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i52", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Burnt Garlic Rice", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i53", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Veg Hakka Noodles", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i54", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Veg Schezwan Noodles", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i55", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Egg Fried Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i56", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Fried Rice", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i57", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Schezwan Rice", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i58", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Burnt Garlic Rice", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i59", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Nasi Goreng Rice", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i60", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Rice Noodles (Combination)", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i61", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Triple Schezwan Rice", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i62", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Prawns Fried Rice", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i63", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Egg Noodles", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i64", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Noodles", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i65", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Schezwan Noodles", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i66", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chilly Oyster Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i67", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Prawns Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i68", "cat": "Chinese", "sub": "Chinese Main", "name": "Chilly Chicken Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i69", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Manchurian Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i70", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Chilly Oyster Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i71", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Crispy Gravy", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i72", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken In Chilly Lemon Sauce", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i73", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Lollypop Masala Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i74", "cat": "Chinese", "sub": "Chinese Main", "name": "Prawns Chilly Gravy", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i75", "cat": "Chinese", "sub": "Classic Chinese Combo", "name": "Lollipop Masala with Rice or Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i76", "cat": "Chinese", "sub": "Classic Chinese Combo", "name": "Chicken Crispy with Rice or Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i77", "cat": "Indian", "sub": "Veg Main", "name": "Paneer Butter Masala", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i78", "cat": "Indian", "sub": "Veg Main", "name": "Kadai Paneer", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i79", "cat": "Indian", "sub": "Veg Main", "name": "Matter Paneer", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i80", "cat": "Indian", "sub": "Veg Main", "name": "Green Peas Masala", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i81", "cat": "Indian", "sub": "Veg Main", "name": "Mushroom Peas Masala", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i82", "cat": "Indian", "sub": "Veg Main", "name": "Mix Veg", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i83", "cat": "Indian", "sub": "Veg Main", "name": "Dal Tadka", "desc": "", "price": 130, "label": "₹130", "img": null, "featured": false, "view": false}, {"id": "i84", "cat": "Indian", "sub": "Veg Main", "name": "Dal Fry", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i85", "cat": "Indian", "sub": "Non-Veg Main", "name": "Butter Chicken", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i86", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Masala", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i87", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Handi", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i88", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Kolhapuri", "desc": "", "price": 210, "label": "₹210", "img": null, "featured": false, "view": false}, {"id": "i89", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Kadhai", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i90", "cat": "Indian", "sub": "Non-Veg Main", "name": "Prawns Masala", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i91", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Masala & 3 Lachha Paratha", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i92", "cat": "Indian", "sub": "Breads", "name": "Tandoori Roti", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i93", "cat": "Indian", "sub": "Breads", "name": "Butter Roti", "desc": "", "price": 40, "label": "₹40", "img": null, "featured": false, "view": false}, {"id": "i94", "cat": "Indian", "sub": "Breads", "name": "Butter Naan", "desc": "", "price": 70, "label": "₹70", "img": null, "featured": false, "view": false}, {"id": "i95", "cat": "Indian", "sub": "Breads", "name": "Cheese Naan", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i96", "cat": "Indian", "sub": "Breads", "name": "Garlic Naan", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i97", "cat": "Indian", "sub": "Breads", "name": "Chapati", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i98", "cat": "Indian", "sub": "Breads", "name": "Lacha Paratha", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i99", "cat": "Indian", "sub": "Rice", "name": "Chicken Biryani", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i100", "cat": "Indian", "sub": "Rice", "name": "Egg Biryani", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i101", "cat": "Indian", "sub": "Rice", "name": "Veg Biryani", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i102", "cat": "Indian", "sub": "Rice", "name": "Dal Khichdi", "desc": "", "price": 130, "label": "₹130", "img": null, "featured": false, "view": false}, {"id": "i103", "cat": "Indian", "sub": "Rice", "name": "Jeera Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i104", "cat": "Indian", "sub": "Rice", "name": "Steam Rice", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i105", "cat": "Indian", "sub": "Rice", "name": "Regular Rice", "desc": "", "price": 100, "label": "₹100", "img": null, "featured": false, "view": false}, {"id": "i106", "cat": "Thali & Seafood", "sub": "Thali", "name": "Veg Thali", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i107", "cat": "Thali & Seafood", "sub": "Thali", "name": "Bangda Thali", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i108", "cat": "Thali & Seafood", "sub": "Thali", "name": "Chicken Thali", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i109", "cat": "Thali & Seafood", "sub": "Thali", "name": "Prawns Thali", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i110", "cat": "Thali & Seafood", "sub": "Thali", "name": "Kingfish Thali", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i111", "cat": "Thali & Seafood", "sub": "Thali", "name": "Chonak Thali", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i112", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Kingfish Fry", "desc": "", "price": null, "label": "APS", "img": null, "featured": false, "view": false}, {"id": "i113", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Prawns Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i114", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Squid Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i115", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Mackerel Rawa Fry", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i116", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Lepo Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i117", "cat": "Drinks", "sub": "Beverage", "name": "Fresh Lemon Soda", "desc": "", "price": 50, "label": "₹50", "img": null, "featured": false, "view": false}, {"id": "i118", "cat": "Drinks", "sub": "Beverage", "name": "Fresh Lemon Water", "desc": "", "price": 50, "label": "₹50", "img": null, "featured": false, "view": false}, {"id": "i119", "cat": "Drinks", "sub": "Beverage", "name": "Water Bottle", "desc": "", "price": 25, "label": "₹25", "img": null, "featured": false, "view": false}, {"id": "i120", "cat": "Drinks", "sub": "Beverage", "name": "Soft Drink 750ml", "desc": "", "price": 70, "label": "₹70", "img": null, "featured": false, "view": false}, {"id": "i121", "cat": "Drinks", "sub": "Beverage", "name": "Red Bull", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i122", "cat": "Drinks", "sub": "Mocktail", "name": "Virgin Mojito", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i123", "cat": "Drinks", "sub": "Mocktail", "name": "Blue Sea", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i124", "cat": "Drinks", "sub": "Mocktail", "name": "Kokum Fizz", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i125", "cat": "Drinks", "sub": "Milkshake", "name": "Chocolate Milkshake", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i126", "cat": "Drinks", "sub": "Milkshake", "name": "Vanilla Milkshake", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i127", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i128", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher Strong", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i129", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher Ultra", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i130", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Tuborg", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i131", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Carlsberg Smooth", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i132", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Corona", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i133", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "People's Lager Beer", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i134", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Heany Can Silver", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i135", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i136", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Strong Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i137", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Draught Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i138", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Budweiser Can", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i139", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Budweiser Magnum Can", "desc": "", "price": null, "label": "₹190", "img": null, "featured": false, "view": true}, {"id": "i140", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Tuborg Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i141", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Carlsberg Smooth Can", "desc": "", "price": null, "label": "₹140", "img": null, "featured": false, "view": true}, {"id": "i142", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Carlsberg Elephant Can", "desc": "", "price": null, "label": "₹150", "img": null, "featured": false, "view": true}, {"id": "i143", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher", "desc": "", "price": null, "label": "₹150", "img": null, "featured": false, "view": true}, {"id": "i144", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher Strong", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i145", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher Ultra", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i146", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Budweiser", "desc": "", "price": null, "label": "₹170", "img": null, "featured": false, "view": true}, {"id": "i147", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Budweiser Magnum", "desc": "", "price": null, "label": "₹190", "img": null, "featured": false, "view": true}, {"id": "i148", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Tuborg", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i149", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Carlsberg Smooth", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i150", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Signature", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i151", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Antiquity", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i152", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Rock Ford", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i153", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaksmith Silver", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i154", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaksmith Gold", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i155", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Blenders Pride Reserve", "desc": "", "price": null, "label": "₹70 / ₹110", "img": null, "featured": false, "view": true}, {"id": "i156", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaken Glow", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i157", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Ballantines", "desc": "", "price": null, "label": "₹95 / ₹190", "img": null, "featured": false, "view": true}, {"id": "i158", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jim Beam", "desc": "", "price": null, "label": "₹105 / ₹210", "img": null, "featured": false, "view": true}, {"id": "i159", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Indri", "desc": "", "price": null, "label": "₹165 / ₹330", "img": null, "featured": false, "view": true}, {"id": "i160", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Chivas", "desc": "", "price": null, "label": "₹170 / ₹330", "img": null, "featured": false, "view": true}, {"id": "i161", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Glenfiddich", "desc": "", "price": null, "label": "₹280 / ₹560", "img": null, "featured": false, "view": true}, {"id": "i162", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jack Daniels", "desc": "", "price": null, "label": "₹160 / ₹320", "img": null, "featured": false, "view": true}, {"id": "i163", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Amrut", "desc": "", "price": null, "label": "₹155 / ₹305", "img": null, "featured": false, "view": true}, {"id": "i164", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "J&B", "desc": "", "price": null, "label": "₹95 / ₹190", "img": null, "featured": false, "view": true}, {"id": "i165", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jameson", "desc": "", "price": null, "label": "₹120 / ₹240", "img": null, "featured": false, "view": true}, {"id": "i166", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Big Boss", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i167", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black & White", "desc": "", "price": null, "label": "₹90 / ₹180", "img": null, "featured": false, "view": true}, {"id": "i168", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Vat 69", "desc": "", "price": null, "label": "₹80 / ₹130", "img": null, "featured": false, "view": true}, {"id": "i169", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black Dog Gold", "desc": "", "price": null, "label": "₹120 / ₹220", "img": null, "featured": false, "view": true}, {"id": "i170", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black Dog Black", "desc": "", "price": null, "label": "₹90 / ₹170", "img": null, "featured": false, "view": true}, {"id": "i171", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Teachers", "desc": "", "price": null, "label": "₹90 / ₹170", "img": null, "featured": false, "view": true}, {"id": "i172", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Red Label", "desc": "", "price": null, "label": "₹130 / ₹250", "img": null, "featured": false, "view": true}, {"id": "i173", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "100 Pipers", "desc": "", "price": null, "label": "₹90 / ₹180", "img": null, "featured": false, "view": true}, {"id": "i174", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Old Monk", "desc": "", "price": null, "label": "₹30 / ₹60", "img": null, "featured": false, "view": true}, {"id": "i175", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Bacardi Lemone", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i176", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Bacardi Black", "desc": "", "price": null, "label": "₹30 / ₹60", "img": null, "featured": false, "view": true}, {"id": "i177", "cat": "Bar", "sub": "Brandy (30ml / 60ml)", "name": "Morpheus", "desc": "", "price": null, "label": "₹50 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i178", "cat": "Bar", "sub": "Breezers", "name": "Blueberry", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i179", "cat": "Bar", "sub": "Breezers", "name": "Caneberry", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i180", "cat": "Bar", "sub": "Breezers", "name": "Watermelon", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i181", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Romanov", "desc": "", "price": null, "label": "₹30 / ₹50", "img": null, "featured": false, "view": true}, {"id": "i182", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Smirnoff", "desc": "", "price": null, "label": "₹55 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i183", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Magic Moment", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i184", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Grey Goose", "desc": "", "price": null, "label": "₹130 / ₹250", "img": null, "featured": false, "view": true}, {"id": "i185", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Absolut", "desc": "", "price": null, "label": "₹106 / ₹212", "img": null, "featured": false, "view": true}, {"id": "i186", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Greater Than", "desc": "", "price": null, "label": "₹70 / ₹120", "img": null, "featured": false, "view": true}, {"id": "i187", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Ginsin", "desc": "", "price": null, "label": "₹70 / ₹120", "img": null, "featured": false, "view": true}, {"id": "i188", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Bombay Sapphire", "desc": "", "price": null, "label": "₹135 / ₹270", "img": null, "featured": false, "view": true}, {"id": "i189", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Port Wine", "desc": "", "price": null, "label": "₹85 / ₹225", "img": null, "featured": false, "view": true}, {"id": "i190", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Red Wine (Sula)", "desc": "", "price": null, "label": "₹355 / ₹1210", "img": null, "featured": false, "view": true}, {"id": "i191", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Sula / Big Banyan", "desc": "", "price": null, "label": "₹360 / ₹1210", "img": null, "featured": false, "view": true}, {"id": "i192", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Sula (White)", "desc": "", "price": null, "label": "₹360 / ₹1010", "img": null, "featured": false, "view": true}];
const MENU_CATS = ["Specials", "Soups", "Chinese", "Indian", "Thali & Seafood", "Drinks", "Bar"];



const cart = {};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug = s => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
const pending = v => !v || /PLACEHOLDER/.test(v);
const byId = id => MENU.find(x => x.id === id);
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const lines = () => Object.entries(cart).map(([id, q]) => ({d: byId(id), q}));
function total(){
  const ls = lines();
  if (!ls.length) return "—";
  if (ls.some(l => l.d.price == null)) return "To be confirmed";
  return CONFIG.currency + ls.reduce((a, l) => a + l.d.price * l.q, 0).toFixed(2);
}

/* ---------- controls ---------- */
const stepperHtml = (id, q) =>
  `<div class="stepper"><button type="button" data-id="${id}" data-d="-1" aria-label="Remove one">−</button><span aria-live="polite">${q}</span><button type="button" data-id="${id}" data-d="1" aria-label="Add one">+</button></div>`;
function ctrlHtml(d){
  if (d.view) return "";
  if (d.available === false) return `<span class="soldout">Unavailable</span>`;
  const q = cart[d.id] || 0;
  return q ? stepperHtml(d.id, q)
           : `<button class="add" type="button" data-id="${d.id}" data-d="1" aria-label="Add ${esc(d.name)} to My Table"><span aria-hidden="true">＋</span><span class="add-label">Add to My Table</span></button>`;
}
function updateCtrl(id){
  const d = byId(id);
  const active = document.activeElement;
  const focusHost = active && active.closest ? active.closest("[data-ctrl]") : null;
  $$(`[data-ctrl="${id}"]`).forEach(host => {
    host.innerHTML = ctrlHtml(d);
    const holder = host.closest(".row, .tile");
    if (holder) holder.classList.toggle("in", !!cart[id]);
  });
  if (focusHost && focusHost.dataset.ctrl === id) {
    const b = focusHost.querySelector('button[data-d="1"]');
    if (b) b.focus();
  }
}

/* ---------- signature dishes ---------- */
function renderSpecials(){
  $("#spList").innerHTML = MENU.filter(d => d.cat === "Specials").map(d => `
    <article class="tile${cart[d.id] ? " in" : ""}">
      ${d.img ? `<div class="tile-media"><img class="bg" src="${IMG[d.img]}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="fg" src="${IMG[d.img]}" alt="${esc(d.name)}" loading="lazy" decoding="async"></div>` : ""}
      <div class="cap">
        <h3>${esc(d.name)}</h3>
        ${d.desc ? `<p class="tdesc">${esc(d.desc)}</p>` : ""}
        <div class="cr"><span class="pr">${esc(d.label)}</span><div class="ctrl" data-ctrl="${d.id}">${ctrlHtml(d)}</div></div>
      </div>
    </article>`).join("");
}

/* ---------- menu rows ---------- */
function row(d){
  const noPhoto = !d.img && !d.view;
  const cls = ["row", d.view ? "view" : "", noPhoto ? "nophoto" : "", cart[d.id] ? "in" : ""].filter(Boolean).join(" ");
  const thumb = d.img && !d.view ? `<div class="thumb"><img src="${IMG[d.img]}" alt="" loading="lazy" decoding="async"></div>` : "";
  const ctrl = d.view ? "" : `<div class="ctrl" data-ctrl="${d.id}">${ctrlHtml(d)}</div>`;
  return `<div class="${cls}">${thumb}<div class="info"><div class="nl${d.label.length > 8 ? " long" : ""}"><span class="nm">${esc(d.name)}</span><span class="lead-dots" aria-hidden="true"></span><span class="pr">${esc(d.label)}</span></div>${d.desc ? `<p class="ds">${esc(d.desc)}</p>` : ""}</div>${ctrl}</div>`;
}
function renderHomeMenu(){
  $("#homeList").innerHTML = MENU.filter(d => d.cat === "Specials").map(row).join("");
}
function renderMenu(){
  let html = "";
  for (const cat of MENU_CATS) {
    const items = MENU.filter(d => d.cat === cat);
    html += `<div class="menu-cat" id="cat-${slug(cat)}"><h2 class="cat-title">${esc(cat)}</h2>`;
    if (cat === "Bar") html += `<p class="note">Served in the restaurant. Not available to order online.</p>`;
    let last = null;
    for (const d of items) {
      if (d.sub !== last) { html += `<h3 class="cat-sub">${esc(d.sub)}</h3>`; last = d.sub; }
      html += row(d);
    }
    html += `</div>`;
  }
  $("#menuBody").innerHTML = html;
  $("#msCats").innerHTML = MENU_CATS.map(c => `<a href="#cat-${slug(c)}" data-target="cat-${slug(c)}">${esc(c)}</a>`).join("");
}
function setupSpy(){
  const links = new Map($$("#msCats a").map(a => [a.dataset.target, a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.remove("on"));
      const a = links.get(en.target.id);
      if (a) { a.classList.add("on"); a.scrollIntoView({inline: "center", block: "nearest"}); }
    });
  }, {root: $("#menuSheet .ms-body"), rootMargin: "-8% 0px -85% 0px"});
  $$("#menuBody .menu-cat").forEach(el => io.observe(el));
}

/* ---------- dialogs ---------- */
let lastFocus = null;
const lock = () => { document.body.style.overflow = ($("#menuSheet").classList.contains("open") || $("#cartDrawer").classList.contains("open")) ? "hidden" : ""; };
function openMenu(){ lastFocus = document.activeElement; $("#menuSheet").classList.add("open"); $("#menuSheet .ms-body").scrollTop = 0; lock(); $("#closeMenu").focus(); }
function closeMenu(){ $("#menuSheet").classList.remove("open"); lock(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function openCart(){ lastFocus = document.activeElement; renderCart(); $("#cartDrawer").classList.add("open"); lock(); $("#closeCart").focus(); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); lock(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
$("#closeMenu").onclick = closeMenu;
$("#closeCart").onclick = closeCart;
$("#cartDrawer").addEventListener("click", e => { if (e.target.id === "cartDrawer") closeCart(); });
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if ($("#cartDrawer").classList.contains("open")) closeCart();
  else if ($("#menuSheet").classList.contains("open")) closeMenu();
});
$("#msCats").addEventListener("click", e => {
  const a = e.target.closest("a[data-target]");
  if (!a) return;
  e.preventDefault();
  document.getElementById(a.dataset.target).scrollIntoView({behavior: "smooth", block: "start"});
});

/* ---------- cart ---------- */
function renderCart(){
  const ls = lines();
  $("#cartLines").innerHTML = ls.length ? ls.map(({d, q}) =>
    `<div class="cart-line"><div><strong>${esc(d.name)}</strong><small>${esc(d.label)} each</small></div>${stepperHtml(d.id, q)}</div>`).join("")
    : `<p class="empty">Your order is empty. Add a few dishes from the menu.</p>`;
  $("#cartTotal").textContent = total();
  $("#cartCount").textContent = count() ? ` (${count()})` : "";
  $("#clearCart").hidden = !ls.length;
}
function onCartChange(id){
  if (id) updateCtrl(id);
  const n = count();
  ["#badgeTop", "#badgeBottom"].forEach(s => { $(s).textContent = n; $(s).classList.toggle("on", n > 0); });
  $("#msBar").hidden = n === 0;
  $("#msBarCount").textContent = n + (n === 1 ? " item" : " items");
  renderCart();
}
document.addEventListener("click", e => {
  const step = e.target.closest("button[data-d]");
  if (step) {
    const d = byId(step.dataset.id);
    if (!d || d.view || d.available === false) return;
    cart[d.id] = Math.max(0, (cart[d.id] || 0) + Number(step.dataset.d));
    if (!cart[d.id]) delete cart[d.id];
    onCartChange(d.id);
    return;
  }
  if (e.target.closest("[data-open-cart]")) { e.preventDefault(); openCart(); return; }
  if (e.target.closest("[data-open-menu]")) { e.preventDefault(); openMenu(); return; }
  if (e.target.closest("[data-clear]")) {
    Object.keys(cart).forEach(id => { delete cart[id]; updateCtrl(id); });
    onCartChange();
  }
});

/* ---------- WhatsApp ordering and reservations ---------- */
// Prevent accidental selection of a past reservation date.
(function setReservationDateMinimum(){ const dateField = $("#rd"); if (!dateField) return; const now = new Date(); const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0,10); dateField.min = localToday; })();
const waReady = () => /^\d{8,15}$/.test(CONFIG.whatsappNumber);
const waUrl = text => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
function show(el, html, kind){ el.className = "msg " + kind; el.innerHTML = html; el.hidden = false; }
function sendWhatsApp(text, el, doneText){
  if (!waReady()) { show(el, "WhatsApp is not set up yet. Please call us instead.", "err"); return; }
  const url = waUrl(text);
  window.open(url, "_blank");
  show(el, `${doneText} If WhatsApp did not open, <a href="${esc(url)}" target="_blank" rel="noopener">tap here</a>.`, "ok");
}
const orderType = () => document.querySelector('input[name="otype"]:checked').value;
// Do not offer email ordering until the restaurant supplies a real email address.
if (pending(CONFIG.email)) { const emailOrderButton = $("#emailOrder"); if (emailOrderButton) emailOrderButton.hidden = true; }
function syncOrderType(){
  const t = orderType();
  const map = {"Pickup": ["Pickup time", "e.g. 7:30 PM"], "Delivery": ["Delivery address", "House or flat, street, landmark"], "Dine-in": ["Time and number of guests", "e.g. 8 PM, 4 people"]};
  $("#oaLabel").textContent = map[t][0];
  $("#oa").placeholder = map[t][1];
  $("#oa").required = t === "Delivery";
}
$$('input[name="otype"]').forEach(r => r.addEventListener("change", syncOrderType));
function orderText(){
  const items = lines().map(({d, q}) => `- ${q} x ${d.name} (${d.label})`).join("\n");
  return `Hi ${CONFIG.restaurant}, I'd like to place an order:\n\n${items}\n\nTotal: ${total()}\n\nOrder type: ${orderType()}\nName: ${$("#on").value.trim()}\nPhone: ${$("#op").value.trim()}\n${$("#oaLabel").textContent}: ${$("#oa").value.trim() || "-"}\nNotes: ${$("#on2").value.trim() || "-"}`;
}
function checkOrder(){
  const msg = $("#orderMsg");
  if (!count()) { show(msg, "Your order is empty. Add at least one dish first.", "err"); return false; }
  if (!$("#orderForm").checkValidity()) { $("#orderForm").reportValidity(); show(msg, "Please fill in your name and phone number" + (orderType() === "Delivery" ? " and delivery address." : "."), "err"); return false; }
  return true;
}
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!checkOrder()) return;
  sendWhatsApp(orderText(), $("#orderMsg"), "Your order is ready in WhatsApp. Please press Send so we receive it. We will reply to confirm.");
});
$("#emailOrder").onclick = () => {
  if (!checkOrder()) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Order from website")}&body=${encodeURIComponent(orderText())}`;
};
$("#resForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = $("#resForm"), msg = $("#resMsg");
  if (!form.checkValidity()) { form.reportValidity(); show(msg, "Please fill in the date, time, your name and a valid phone number.", "err"); return; }
  const text = `Hi ${CONFIG.restaurant}, I'd like to request a table.\nDate: ${$("#rd").value}\nTime: ${$("#rt").value}\nGuests: ${$("#rg").value}\nName: ${$("#rn").value.trim()}\nPhone: ${$("#rp").value.trim()}\nMessage: ${$("#rm").value.trim() || "-"}`;
  sendWhatsApp(text, msg, "Your request is ready in WhatsApp. Please press Send. Your table is only confirmed once we reply.");
});

/* ---------- fill the page ---------- */
$$('[data-img]').forEach(el => {
  const src = IMG[el.dataset.img];
  if (!src) return;
  el.src = src;
  el.decoding = 'async';
  if (el.dataset.img === 'logo') { el.width = 1078; el.height = 572; }
});
$$("#strip img").forEach(img => {
  const setRatio = () => img.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(4));
  if (img.complete && img.naturalWidth) setRatio(); else img.addEventListener("load", setRatio);
});
$("#addr").innerHTML = [CONFIG.legalName, ...CONFIG.address].map(esc).join("<br>");
$("#phones").innerHTML = CONFIG.phones.map(esc).join("<br>");
$("#mapsLink").href = CONFIG.mapsUrl;
$("#waLink").href = `https://wa.me/${CONFIG.whatsappNumber}`;
$("#callLink").href = "tel:+" + CONFIG.whatsappNumber;
$("#emailLine").textContent = pending(CONFIG.email) ? "[Placeholder: email address]" : CONFIG.email;
if (pending(CONFIG.email)) $("#emailOrder").hidden = true;
const igHandle = (() => { try { return "@" + new URL(CONFIG.instagram).pathname.replace(/\//g, ""); } catch (e) { return "Instagram"; } })();
$("#igSlot").innerHTML = pending(CONFIG.instagram)
  ? `<span class="pending">Instagram link to be added</span>`
  : `<a class="link" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram ${esc(igHandle)}</a>`;
$("#platforms").innerHTML = [["Zomato", CONFIG.zomato], ["Swiggy", CONFIG.swiggy]].map(([name, url]) =>
  pending(url)
    ? `<span class="pending">${name}: verified link to be added</span>`
    : `<a class="btn btn-line" href="${esc(url)}" target="_blank" rel="noopener">Order on ${name}</a>`).join("");
$("#footContact").innerHTML =
  `<p>${CONFIG.phones.map(esc).join("<br>")}</p><p style="margin-top:10px">${CONFIG.address.map(esc).join("<br>")}</p>` +
  (pending(CONFIG.instagram) ? "" : `<p style="margin-top:10px"><a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram</a></p>`);
const dayRows = $$(".hours tr");
const goaClock = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
function updateLiveHours() {
  const parts = Object.fromEntries(goaClock.formatToParts(new Date()).map(p => [p.type, p.value]));
  const weekday = parts.weekday;
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const isTuesday = weekday === "Tuesday";
  const openNow = (minutes >= 660 && minutes < 960) || (!isTuesday && minutes >= 1080 && minutes < 1380);
  const nextOpen = minutes < 660 ? "Opens today at 11:00 AM" : (minutes < 1080 && !isTuesday ? "Reopens today at 6:00 PM" : (minutes < 1080 && isTuesday ? "Opens tomorrow at 11:00 AM" : "Opens tomorrow at 11:00 AM"));
  const state = $("#liveHoursState"), detail = $("#liveHoursDetail"), box = $("#liveHours");
  if (state && detail && box) {
    box.classList.toggle("is-open", openNow);
    box.classList.toggle("is-closed", !openNow);
    state.textContent = openNow ? "OPEN NOW" : "CLOSED NOW";
    detail.textContent = openNow ? (minutes < 960 ? "Lunch service · closes at 4:00 PM" : "Dinner service · closes at 11:00 PM") : nextOpen;
  }
  if (dayRows.length === 7) dayRows.forEach(row => row.classList.toggle("today", row.querySelector("th")?.textContent.trim() === weekday));
}
updateLiveHours();
setInterval(updateLiveHours, 60000);
const t0 = new Date(), pad = n => String(n).padStart(2, "0");
$("#rd").min = `${t0.getFullYear()}-${pad(t0.getMonth() + 1)}-${pad(t0.getDate())}`;
syncOrderType();

renderSpecials();
renderHomeMenu();
renderMenu();
setupSpy();
onCartChange();

/* ---------- hero slideshow ---------- */
(function(){
  const slides = CONFIG.heroSlides.filter(s => IMG[s.img]);
  $("#heroTag").innerHTML = CONFIG.heroTagline.map(esc).join("<br>");
  const dots = $("#heroDots");
  $("#heroSlides").innerHTML = slides.map((s, i) =>
    `<img class="hero-img${i === 0 ? " on" : ""}" src="${IMG[s.img]}" alt="${esc(s.alt)}" style="object-position:${esc(s.pos || "50% 50%")}" decoding="async"${i === 0 ? ' fetchpriority="high"' : ""}>`).join("");
  if (slides.length < 2) { dots.hidden = true; return; }
  dots.innerHTML = slides.map((s, i) =>
    `<button type="button" class="${i === 0 ? "on" : ""}" data-slide="${i}" aria-label="Show photo ${i + 1} of ${slides.length}" aria-current="${i === 0}"></button>`).join("");
  const imgs = $$("#heroSlides .hero-img"), btns = $$("#heroDots button");
  let cur = 0, timer = null;
  const go = i => {
    cur = (i + slides.length) % slides.length;
    imgs.forEach((im, k) => im.classList.toggle("on", k === cur));
    btns.forEach((b, k) => { b.classList.toggle("on", k === cur); b.setAttribute("aria-current", String(k === cur)); });
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = () => { if (reduce || timer) return; timer = setInterval(() => { if (!document.hidden) go(cur + 1); }, 6500); };
  const stop = () => { clearInterval(timer); timer = null; };
  dots.addEventListener("click", e => { const b = e.target.closest("button[data-slide]"); if (!b) return; go(Number(b.dataset.slide)); stop(); start(); });
  const hero = $("#hero");
  hero.addEventListener("mouseenter", stop); hero.addEventListener("mouseleave", start);
  hero.addEventListener("focusin", stop); hero.addEventListener("focusout", start);
  start();
})();

/* ---------- highlight the current section in the header menu ---------- */
(function(){
  const links = $$(".top-nav a[data-nav]");
  const map = {hero: "home", about: "home", specials: "home", "home-menu": "menu", story: "gallery", gallery: "gallery", reserve: "reservation", visit: "contact"};
  const set = k => links.forEach(a => { const on = a.dataset.nav === k; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  set("home");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting && map[en.target.id]) set(map[en.target.id]); }), {rootMargin: "-45% 0px -50% 0px"});
  Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

/* ---------- header on scroll ---------- */
(function(){
  const top = $(".top");
  const onScroll = () => {
    const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    top.classList.toggle("scrolled", y > 24);
    top.style.setProperty("--sp", max > 0 ? (y / max).toFixed(4) : 0);
  };
  window.addEventListener("scroll", onScroll, {passive: true});
  onScroll();
})();

/* ---------- gentle reveal on scroll ---------- */
(function(){
  const sel = ["#about .about-grid > *", "#specials .wrap", "#spList", "#home-menu .wrap > *", ".story-grid > *", "#gallery .wrap > *",
               "#reserve .res-grid > *", "#visit .wrap > .eyebrow", "#visit .wrap > h2", "#visit .vb", ".foot-grid > *"];
  const els = [...new Set($$(sel.join(",")))];
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries, obs) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in-view"); obs.unobserve(en.target); } });
  }, {threshold: 0.1, rootMargin: "0px 0px -5% 0px"}) : null;
  els.forEach(el => {
    el.classList.add("reveal");
    const sibs = el.parentElement ? [...el.parentElement.children] : [];
    el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) % 3) * 90 + "ms";
    if (io) io.observe(el); else el.classList.add("in-view");
  });
})();

/* ---------- loading screen ---------- */
(function(){
  const loader = $("#loader"), fill = $("#ldFill");
  let p = 0, ready = false, finished = false;
  const MIN = 2650;                            // allow the cinematic logo reveal to finish before the curtain opens
  const finish = () => {
    if (finished) return; finished = true;
    fill.style.transform = "scaleX(1)";
    setTimeout(() => {
      loader.classList.add("done");
      document.body.classList.remove("loading");
      document.documentElement.classList.add("ready");
      setTimeout(() => loader.remove(), 1700);
    }, 280);
  };
  const frame = () => {
    if (finished) return;
    p += ((ready ? 1 : 0.86) - p) * (ready ? 0.2 : 0.035);
    fill.style.transform = "scaleX(" + p.toFixed(4) + ")";
    if (ready && p > 0.985) { finish(); return; }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  const markLoaded = () => setTimeout(() => { ready = true; }, Math.max(0, MIN - performance.now()));
  if (document.readyState === "complete") markLoaded(); else window.addEventListener("load", markLoaded);
  setTimeout(finish, 5900);                    // safety net; CSS also has a failsafe
})();


/* ===== RATAN premium motion layer ===== */
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  // Gentle reveal: CSS only animates when the observer marks an element visible.
  const revealSelectors = [
    '#about .about-grid', '#specials .section-head', '#specials .menu-grid',
    '#home-menu .section-head', '#home-menu .menu-grid', '#story .story-grid',
    '#gallery .section-head', '#gallery .gallery-grid', '#reserve .reserve-card',
    '#visit .visit-grid', '.orn', '.taste li'
  ];
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = [...new Set(revealSelectors.flatMap(sel => [...document.querySelectorAll(sel)]))];
    targets.forEach((el, i) => {
      if (el.closest('.cart-drawer, dialog, [hidden]')) return;
      el.classList.add('motion-reveal');
      if (el.matches('.taste li, .gallery-grid > *, .menu-grid > *')) {
        el.style.setProperty('--reveal-delay', `${Math.min((i % 5) * 55, 220)}ms`);
      }
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    targets.forEach(el => { if (el.classList.contains('motion-reveal')) revealObserver.observe(el); });
  }

  // Lenis is an enhancement only. If the CDN is unavailable, native scrolling remains intact.
  function startLenis() {
    if (reduceMotion || !window.Lenis || root.dataset.lenisReady === 'true') return;
    try {
      const lenis = new window.Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1,
        anchors: { offset: 12 },
        lerp: 0.085
      });
      root.dataset.lenisReady = 'true';
      root.classList.add('lenis-enabled');
      // Keep a reference for debugging and allow normal native scroll if reduced motion changes.
      window.ratanLenis = lenis;
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
          const href = link.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (!target) return;
          // Don't hijack links inside drawers or controls.
          if (link.closest('.cart-drawer, dialog')) return;
          event.preventDefault();
          lenis.scrollTo(target, { offset: -10 });
          history.replaceState(null, '', href);
        });
      });
    } catch (err) {
      // Fail safely: core site functionality must not depend on Lenis.
      root.classList.remove('lenis-enabled');
    }
  }
  if (window.Lenis) startLenis();
  else window.addEventListener('load', startLenis, { once: true });
})();
