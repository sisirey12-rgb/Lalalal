

/* ===== Existing RATAN application logic (preserved) ===== */

const IMG = {"ramen": "assets/food-ramen.webp", "interior": "assets/food-interior.webp", "table": "assets/food-table.webp", "food": "assets/food-food.webp", "team": "assets/food-team.webp", "artist": "assets/food-artist.webp", "cigar": "assets/food-cigar.webp", "jhol": "assets/food-jhol.webp", "momos": "assets/food-momos.webp", "wings": "assets/food-wings.webp", "pasta": "assets/food-pasta.webp", "khao": "assets/food-khao.webp", "tempura": "assets/food-tempura.webp", "chilly": "assets/food-chilly.webp", "logo": "assets/ratan-logo.webp", "heroWok": "assets/food-heroWok.webp"};
IMG.ratanHero = "assets/ratan-hero.png?v=20261017c";   // keep identical to the <link rel="preload"> in index.html
const hm = (h, m = 0) => h * 60 + m;            // minutes after midnight
const LUNCH = [hm(11), hm(16)], DINNER = [hm(18), hm(23)];
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
  // Opening hours, always read in restaurant (Goa) time, whatever the visitor's own clock says.
  // 0 = Sunday ... 6 = Saturday. Each entry is [opens, closes]. Edit here only; the table and status follow.
  timezone: "Asia/Kolkata",
  hours: {
    0: [LUNCH, DINNER],   // Sunday
    1: [LUNCH, DINNER],   // Monday
    2: [LUNCH],           // Tuesday (lunch only)
    3: [LUNCH, DINNER],   // Wednesday
    4: [LUNCH, DINNER],   // Thursday
    5: [LUNCH, DINNER],   // Friday
    6: [LUNCH, DINNER]    // Saturday
  },
    // Hero slideshow: each slide uses a landscape food photo (a key from IMG). One slide = no indicators.
  heroSlides: [
    {img: "ratanHero", alt: "RATAN Chinese original hero image"}
  ],
  heroTagline: ["Wok-tossed flavours.", "Made for sharing."],
  // ---- Optional sections: each stays hidden until you fill it in ----
  fssai: "",                                 // e.g. "12345678901234"  -> shows "FSSAI Lic. No." in the footer
  todaySpecial: {title: "", text: "", price: ""},   // e.g. {title: "Prawns Cigar Roll", text: "Fresh and crispy today", price: "₹290"}
  rating: {value: "", count: "", url: ""},   // e.g. {value: "4.4", count: "250+", url: "https://g.page/..."} (use your real Google rating)
  reviews: [],                               // real reviews only: [{name: "Name", text: "Review text", stars: 5}]
  team: {title: "", text: "", img: "team"},  // fill title + text to show a "Meet the kitchen" section (img = a key from IMG)
  // Kitchen wait times shown in the cart. "peak" = busy windows in minutes after midnight. Edit to match reality.
  wait: {normal: "20–25 minutes", busy: "35–45 minutes", peak: [[hm(13), hm(14, 30)], [hm(20), hm(22)]]},
  groupMinGuests: 8
};
// Each item: label = text shown; price = number used for totals (null = "To be confirmed"); view = not orderable online.
const MENU = [{"id": "i1", "cat": "Specials", "sub": "Specials", "name": "Veg / Non Veg Burmese Khao Suey", "desc": "A harmony of Burmese flavours", "price": null, "label": "₹299 / ₹350", "img": "khao", "featured": false, "view": false}, {"id": "i2", "cat": "Specials", "sub": "Specials", "name": "Ramen Noodle Soup (Non-veg)", "desc": "One bowl. Zero regrets.", "price": 350, "label": "₹350", "img": "ramen", "featured": true, "view": false}, {"id": "i3", "cat": "Specials", "sub": "Specials", "name": "Prawns Cigar Roll", "desc": "Crispy outside. Savory inside.", "price": 290, "label": "₹290", "img": "cigar", "featured": true, "view": false}, {"id": "i4", "cat": "Specials", "sub": "Specials", "name": "Momo - Chicken", "desc": "Steamy, juicy, irresistible.", "price": 160, "label": "₹160", "img": "momos", "featured": false, "view": false}, {"id": "i5", "cat": "Specials", "sub": "Specials", "name": "Jhol Momo", "desc": "Taste the tradition", "price": 200, "label": "₹200", "img": "jhol", "featured": true, "view": false}, {"id": "i6", "cat": "Specials", "sub": "Specials", "name": "BBQ Chicken Wings", "desc": "Bold flavour in every bite", "price": 290, "label": "₹290", "img": "wings", "featured": false, "view": false}, {"id": "i7", "cat": "Specials", "sub": "Specials", "name": "White Sauce Pasta", "desc": "Creamy and cheesy", "price": 299, "label": "₹299", "img": "pasta", "featured": false, "view": false}, {"id": "i8", "cat": "Specials", "sub": "Specials", "name": "Tempura Prawns", "desc": "Golden bites of pure delight", "price": 290, "label": "₹290", "img": "tempura", "featured": false, "view": false}, {"id": "i44", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Manchow Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i45", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Hot & Sour Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i46", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Noodles Soup", "desc": "", "price": null, "label": "₹100 / ₹120", "img": null, "featured": false, "view": false}, {"id": "i47", "cat": "Soups", "sub": "Soups (Veg / Non Veg)", "name": "Burmese Chicken Soup", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i48", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Fried Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i49", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Schezwan Fried Rice", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i50", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Mushroom Fried Rice", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i51", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Triple Schezwan Rice", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i52", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Burnt Garlic Rice", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i53", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Veg Hakka Noodles", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i54", "cat": "Chinese", "sub": "Veg Rice & Noodles", "name": "Veg Schezwan Noodles", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i55", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Egg Fried Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i56", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Fried Rice", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i57", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Schezwan Rice", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i58", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Burnt Garlic Rice", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i59", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Nasi Goreng Rice", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i60", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Rice Noodles (Combination)", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i61", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Triple Schezwan Rice", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i62", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Prawns Fried Rice", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i63", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Egg Noodles", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i64", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Noodles", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i65", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chicken Schezwan Noodles", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i66", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Chilly Oyster Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i67", "cat": "Chinese", "sub": "Non-Veg Rice & Noodles", "name": "Prawns Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i68", "cat": "Chinese", "sub": "Chinese Main", "name": "Chilly Chicken Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i69", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Manchurian Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i70", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Chilly Oyster Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i71", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Crispy Gravy", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i72", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken In Chilly Lemon Sauce", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i73", "cat": "Chinese", "sub": "Chinese Main", "name": "Chicken Lollypop Masala Gravy", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i74", "cat": "Chinese", "sub": "Chinese Main", "name": "Prawns Chilly Gravy", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i75", "cat": "Chinese", "sub": "Classic Chinese Combo", "name": "Lollipop Masala with Rice or Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i76", "cat": "Chinese", "sub": "Classic Chinese Combo", "name": "Chicken Crispy with Rice or Noodles", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i77", "cat": "Indian", "sub": "Veg Main", "name": "Paneer Butter Masala", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i78", "cat": "Indian", "sub": "Veg Main", "name": "Kadai Paneer", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i79", "cat": "Indian", "sub": "Veg Main", "name": "Matter Paneer", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i80", "cat": "Indian", "sub": "Veg Main", "name": "Green Peas Masala", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i81", "cat": "Indian", "sub": "Veg Main", "name": "Mushroom Peas Masala", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i82", "cat": "Indian", "sub": "Veg Main", "name": "Mix Veg", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i83", "cat": "Indian", "sub": "Veg Main", "name": "Dal Tadka", "desc": "", "price": 130, "label": "₹130", "img": null, "featured": false, "view": false}, {"id": "i84", "cat": "Indian", "sub": "Veg Main", "name": "Dal Fry", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i85", "cat": "Indian", "sub": "Non-Veg Main", "name": "Butter Chicken", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i86", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Masala", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i87", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Handi", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i88", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Kolhapuri", "desc": "", "price": 210, "label": "₹210", "img": null, "featured": false, "view": false}, {"id": "i89", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Kadhai", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i90", "cat": "Indian", "sub": "Non-Veg Main", "name": "Prawns Masala", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i91", "cat": "Indian", "sub": "Non-Veg Main", "name": "Chicken Masala & 3 Lachha Paratha", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i92", "cat": "Indian", "sub": "Breads", "name": "Tandoori Roti", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i93", "cat": "Indian", "sub": "Breads", "name": "Butter Roti", "desc": "", "price": 40, "label": "₹40", "img": null, "featured": false, "view": false}, {"id": "i94", "cat": "Indian", "sub": "Breads", "name": "Butter Naan", "desc": "", "price": 70, "label": "₹70", "img": null, "featured": false, "view": false}, {"id": "i95", "cat": "Indian", "sub": "Breads", "name": "Cheese Naan", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i96", "cat": "Indian", "sub": "Breads", "name": "Garlic Naan", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i97", "cat": "Indian", "sub": "Breads", "name": "Chapati", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i98", "cat": "Indian", "sub": "Breads", "name": "Lacha Paratha", "desc": "", "price": 30, "label": "₹30", "img": null, "featured": false, "view": false}, {"id": "i99", "cat": "Indian", "sub": "Rice", "name": "Chicken Biryani", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i100", "cat": "Indian", "sub": "Rice", "name": "Egg Biryani", "desc": "", "price": 180, "label": "₹180", "img": null, "featured": false, "view": false}, {"id": "i101", "cat": "Indian", "sub": "Rice", "name": "Veg Biryani", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i102", "cat": "Indian", "sub": "Rice", "name": "Dal Khichdi", "desc": "", "price": 130, "label": "₹130", "img": null, "featured": false, "view": false}, {"id": "i103", "cat": "Indian", "sub": "Rice", "name": "Jeera Rice", "desc": "", "price": 140, "label": "₹140", "img": null, "featured": false, "view": false}, {"id": "i104", "cat": "Indian", "sub": "Rice", "name": "Steam Rice", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i105", "cat": "Indian", "sub": "Rice", "name": "Regular Rice", "desc": "", "price": 100, "label": "₹100", "img": null, "featured": false, "view": false}, {"id": "i106", "cat": "Thali & Seafood", "sub": "Thali", "name": "Veg Thali", "desc": "", "price": 120, "label": "₹120", "img": null, "featured": false, "view": false}, {"id": "i107", "cat": "Thali & Seafood", "sub": "Thali", "name": "Bangda Thali", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i108", "cat": "Thali & Seafood", "sub": "Thali", "name": "Chicken Thali", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i109", "cat": "Thali & Seafood", "sub": "Thali", "name": "Prawns Thali", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i110", "cat": "Thali & Seafood", "sub": "Thali", "name": "Kingfish Thali", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i111", "cat": "Thali & Seafood", "sub": "Thali", "name": "Chonak Thali", "desc": "", "price": 220, "label": "₹220", "img": null, "featured": false, "view": false}, {"id": "i112", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Kingfish Fry", "desc": "", "price": null, "label": "APS", "img": null, "featured": false, "view": false}, {"id": "i113", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Prawns Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i114", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Squid Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i115", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Mackerel Rawa Fry", "desc": "", "price": 200, "label": "₹200", "img": null, "featured": false, "view": false}, {"id": "i116", "cat": "Thali & Seafood", "sub": "Seafood", "name": "Lepo Rawa Fry", "desc": "", "price": 250, "label": "₹250", "img": null, "featured": false, "view": false}, {"id": "i117", "cat": "Drinks", "sub": "Beverage", "name": "Fresh Lemon Soda", "desc": "", "price": 50, "label": "₹50", "img": null, "featured": false, "view": false}, {"id": "i118", "cat": "Drinks", "sub": "Beverage", "name": "Fresh Lemon Water", "desc": "", "price": 50, "label": "₹50", "img": null, "featured": false, "view": false}, {"id": "i119", "cat": "Drinks", "sub": "Beverage", "name": "Water Bottle", "desc": "", "price": 25, "label": "₹25", "img": null, "featured": false, "view": false}, {"id": "i120", "cat": "Drinks", "sub": "Beverage", "name": "Soft Drink 750ml", "desc": "", "price": 70, "label": "₹70", "img": null, "featured": false, "view": false}, {"id": "i121", "cat": "Drinks", "sub": "Beverage", "name": "Red Bull", "desc": "", "price": 150, "label": "₹150", "img": null, "featured": false, "view": false}, {"id": "i122", "cat": "Drinks", "sub": "Mocktail", "name": "Virgin Mojito", "desc": "", "price": 170, "label": "₹170", "img": null, "featured": false, "view": false}, {"id": "i123", "cat": "Drinks", "sub": "Mocktail", "name": "Blue Sea", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i124", "cat": "Drinks", "sub": "Mocktail", "name": "Kokum Fizz", "desc": "", "price": 160, "label": "₹160", "img": null, "featured": false, "view": false}, {"id": "i125", "cat": "Drinks", "sub": "Milkshake", "name": "Chocolate Milkshake", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i126", "cat": "Drinks", "sub": "Milkshake", "name": "Vanilla Milkshake", "desc": "", "price": 190, "label": "₹190", "img": null, "featured": false, "view": false}, {"id": "i127", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i128", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher Strong", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i129", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Kingfisher Ultra", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i130", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Tuborg", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i131", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Carlsberg Smooth", "desc": "", "price": null, "label": "₹90", "img": null, "featured": false, "view": true}, {"id": "i132", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Corona", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i133", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "People's Lager Beer", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i134", "cat": "Bar", "sub": "Cold Beers (330ml)", "name": "Heany Can Silver", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i135", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i136", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Strong Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i137", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Kingfisher Draught Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i138", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Budweiser Can", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i139", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Budweiser Magnum Can", "desc": "", "price": null, "label": "₹190", "img": null, "featured": false, "view": true}, {"id": "i140", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Tuborg Can", "desc": "", "price": null, "label": "₹110", "img": null, "featured": false, "view": true}, {"id": "i141", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Carlsberg Smooth Can", "desc": "", "price": null, "label": "₹140", "img": null, "featured": false, "view": true}, {"id": "i142", "cat": "Bar", "sub": "Cold Beers (500ml)", "name": "Carlsberg Elephant Can", "desc": "", "price": null, "label": "₹150", "img": null, "featured": false, "view": true}, {"id": "i143", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher", "desc": "", "price": null, "label": "₹150", "img": null, "featured": false, "view": true}, {"id": "i144", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher Strong", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i145", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Kingfisher Ultra", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i146", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Budweiser", "desc": "", "price": null, "label": "₹170", "img": null, "featured": false, "view": true}, {"id": "i147", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Budweiser Magnum", "desc": "", "price": null, "label": "₹190", "img": null, "featured": false, "view": true}, {"id": "i148", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Tuborg", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i149", "cat": "Bar", "sub": "Cold Beers (650ml)", "name": "Carlsberg Smooth", "desc": "", "price": null, "label": "₹160", "img": null, "featured": false, "view": true}, {"id": "i150", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Signature", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i151", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Antiquity", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i152", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Rock Ford", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i153", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaksmith Silver", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i154", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaksmith Gold", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i155", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Blenders Pride Reserve", "desc": "", "price": null, "label": "₹70 / ₹110", "img": null, "featured": false, "view": true}, {"id": "i156", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Oaken Glow", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i157", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Ballantines", "desc": "", "price": null, "label": "₹95 / ₹190", "img": null, "featured": false, "view": true}, {"id": "i158", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jim Beam", "desc": "", "price": null, "label": "₹105 / ₹210", "img": null, "featured": false, "view": true}, {"id": "i159", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Indri", "desc": "", "price": null, "label": "₹165 / ₹330", "img": null, "featured": false, "view": true}, {"id": "i160", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Chivas", "desc": "", "price": null, "label": "₹170 / ₹330", "img": null, "featured": false, "view": true}, {"id": "i161", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Glenfiddich", "desc": "", "price": null, "label": "₹280 / ₹560", "img": null, "featured": false, "view": true}, {"id": "i162", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jack Daniels", "desc": "", "price": null, "label": "₹160 / ₹320", "img": null, "featured": false, "view": true}, {"id": "i163", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Amrut", "desc": "", "price": null, "label": "₹155 / ₹305", "img": null, "featured": false, "view": true}, {"id": "i164", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "J&B", "desc": "", "price": null, "label": "₹95 / ₹190", "img": null, "featured": false, "view": true}, {"id": "i165", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Jameson", "desc": "", "price": null, "label": "₹120 / ₹240", "img": null, "featured": false, "view": true}, {"id": "i166", "cat": "Bar", "sub": "Whisky (30ml / 60ml)", "name": "Big Boss", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i167", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black & White", "desc": "", "price": null, "label": "₹90 / ₹180", "img": null, "featured": false, "view": true}, {"id": "i168", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Vat 69", "desc": "", "price": null, "label": "₹80 / ₹130", "img": null, "featured": false, "view": true}, {"id": "i169", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black Dog Gold", "desc": "", "price": null, "label": "₹120 / ₹220", "img": null, "featured": false, "view": true}, {"id": "i170", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Black Dog Black", "desc": "", "price": null, "label": "₹90 / ₹170", "img": null, "featured": false, "view": true}, {"id": "i171", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Teachers", "desc": "", "price": null, "label": "₹90 / ₹170", "img": null, "featured": false, "view": true}, {"id": "i172", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "Red Label", "desc": "", "price": null, "label": "₹130 / ₹250", "img": null, "featured": false, "view": true}, {"id": "i173", "cat": "Bar", "sub": "Scotch (30ml / 60ml)", "name": "100 Pipers", "desc": "", "price": null, "label": "₹90 / ₹180", "img": null, "featured": false, "view": true}, {"id": "i174", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Old Monk", "desc": "", "price": null, "label": "₹30 / ₹60", "img": null, "featured": false, "view": true}, {"id": "i175", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Bacardi Lemone", "desc": "", "price": null, "label": "₹60 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i176", "cat": "Bar", "sub": "Rum (30ml / 60ml)", "name": "Bacardi Black", "desc": "", "price": null, "label": "₹30 / ₹60", "img": null, "featured": false, "view": true}, {"id": "i177", "cat": "Bar", "sub": "Brandy (30ml / 60ml)", "name": "Morpheus", "desc": "", "price": null, "label": "₹50 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i178", "cat": "Bar", "sub": "Breezers", "name": "Blueberry", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i179", "cat": "Bar", "sub": "Breezers", "name": "Caneberry", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i180", "cat": "Bar", "sub": "Breezers", "name": "Watermelon", "desc": "", "price": null, "label": "₹130", "img": null, "featured": false, "view": true}, {"id": "i181", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Romanov", "desc": "", "price": null, "label": "₹30 / ₹50", "img": null, "featured": false, "view": true}, {"id": "i182", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Smirnoff", "desc": "", "price": null, "label": "₹55 / ₹100", "img": null, "featured": false, "view": true}, {"id": "i183", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Magic Moment", "desc": "", "price": null, "label": "₹40 / ₹70", "img": null, "featured": false, "view": true}, {"id": "i184", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Grey Goose", "desc": "", "price": null, "label": "₹130 / ₹250", "img": null, "featured": false, "view": true}, {"id": "i185", "cat": "Bar", "sub": "Vodka (30ml / 60ml)", "name": "Absolut", "desc": "", "price": null, "label": "₹106 / ₹212", "img": null, "featured": false, "view": true}, {"id": "i186", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Greater Than", "desc": "", "price": null, "label": "₹70 / ₹120", "img": null, "featured": false, "view": true}, {"id": "i187", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Ginsin", "desc": "", "price": null, "label": "₹70 / ₹120", "img": null, "featured": false, "view": true}, {"id": "i188", "cat": "Bar", "sub": "Gin (30ml / 60ml)", "name": "Bombay Sapphire", "desc": "", "price": null, "label": "₹135 / ₹270", "img": null, "featured": false, "view": true}, {"id": "i189", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Port Wine", "desc": "", "price": null, "label": "₹85 / ₹225", "img": null, "featured": false, "view": true}, {"id": "i190", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Red Wine (Sula)", "desc": "", "price": null, "label": "₹355 / ₹1210", "img": null, "featured": false, "view": true}, {"id": "i191", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Sula / Big Banyan", "desc": "", "price": null, "label": "₹360 / ₹1210", "img": null, "featured": false, "view": true}, {"id": "i192", "cat": "Bar", "sub": "Wine (Glass / Bottle)", "name": "Sula (White)", "desc": "", "price": null, "label": "₹360 / ₹1010", "img": null, "featured": false, "view": true}];
const MENU_CATS = ["Specials", "Soups", "Chinese", "Indian", "Thali & Seafood", "Drinks", "Bar"];

/* HOURS-ENGINE:START (pure functions, no DOM, unit-tested) */
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const pad2 = n => String(n).padStart(2, "0");
const fmtClock = m => { const h = Math.floor(m / 60) % 24, mm = m % 60; return `${h % 12 || 12}${mm ? ":" + pad2(mm) : ""} ${h < 12 ? "AM" : "PM"}`; };
const fmtSpan = m => { if (m < 60) return `${m} min`; const h = Math.floor(m / 60), r = m % 60; return r ? `${h}h ${pad2(r)}m` : `${h}h`; };
const goaFmt = new Intl.DateTimeFormat("en-US", { timeZone: CONFIG.timezone, weekday: "short", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" });
function goaNow(date = new Date()) {
  const p = {};
  goaFmt.formatToParts(date).forEach(x => { p[x.type] = x.value; });
  return { day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday), mins: (Number(p.hour) % 24) * 60 + Number(p.minute), secs: Number(p.second) };
}
// state: open | closing (45 min or less left) | soon (opens within the hour) | closed
function hoursStatus(hours, day, mins) {
  const today = hours[day] || [];
  const live = today.find(([o, c]) => mins >= o && mins < c);
  if (live) {
    const left = live[1] - mins, back = today.find(([o]) => o >= live[1]);
    if (left <= 45) return { open: true, state: "closing", label: "Closing soon", detail: `Closes at ${fmtClock(live[1])} · in ${fmtSpan(left)}`, minsLeft: left };
    return { open: true, state: "open", label: "Open now", detail: `Open until ${fmtClock(live[1])}${back ? ` · back at ${fmtClock(back[0])}` : ""}`, minsLeft: left };
  }
  for (let add = 0; add <= 7; add++) {
    const d = (day + add) % 7;
    const next = (hours[d] || []).find(([o]) => add > 0 || o > mins);
    if (!next) continue;
    const until = add * 1440 + next[0] - mins;
    const reopening = add === 0 && today.some(([, c]) => c <= mins);
    const when = add === 0 ? `${reopening ? "Reopens" : "Opens"} today at ${fmtClock(next[0])}`
               : add === 1 ? `Opens tomorrow at ${fmtClock(next[0])}`
               : `Opens ${DAY_NAMES[d]} at ${fmtClock(next[0])}`;
    if (until <= 60) return { open: false, state: "soon", label: "Opening soon", detail: `Opens at ${fmtClock(next[0])} · in ${fmtSpan(until)}`, minsUntil: until };
    return { open: false, state: "closed", label: "Closed now", detail: add === 0 && until < 360 ? `${when} · in ${fmtSpan(until)}` : when, minsUntil: until };
  }
  return { open: false, state: "closed", label: "Closed", detail: "Please call us for timings", minsUntil: Infinity };
}
/* HOURS-ENGINE:END */



// "Veg / Non Veg" dishes carry two prices. Split them into two orderable items so the cart always has an exact total.
(function splitTwoPriceDishes() {
  const out = [];
  MENU.forEach(d => {
    const m = !d.view && d.price == null && /^₹(\d+) \/ ₹(\d+)$/.exec(d.label);
    if (!m) { out.push(d); return; }
    const base = d.name.replace(/^Veg \/ Non Veg\s+/i, "");
    out.push(Object.assign({}, d, { id: d.id + "v", name: `${base} (Veg)`, price: Number(m[1]), label: `₹${m[1]}` }));
    out.push(Object.assign({}, d, { id: d.id + "n", name: `${base} (Non\u00a0veg)`, price: Number(m[2]), label: `₹${m[2]}`, featured: false }));
  });
  MENU.length = 0; MENU.push(...out);
})();

// Veg / non-veg marker. Only set when the dish name or section makes it certain; everything else stays unmarked.
(function tagDiet() {
  const nv = /chicken|prawn|egg|fish|squid|lepo|mackerel|kingfish|bangda|chonak|oyster|mutton|non[\s-]?veg|ramen|wings|lollipop|lollypop|crispy gravy|butter chicken/i;
  const v = /(^|\W)veg(\W|$)|paneer|dal |dal$|mushroom|peas|roti|naan|chapati|paratha|jeera|rice$|khichdi|lemon|water|soda|mojito|blue sea|kokum|milkshake|soft drink|red bull/i;
  MENU.forEach(d => {
    if (d.view) { d.diet = null; return; }
    const sub = d.sub || "";
    if (nv.test(d.name) || /non[\s-]?veg/i.test(sub)) d.diet = "nv";
    else if (/^veg/i.test(sub) || v.test(d.name)) d.diet = "v";
    else d.diet = null;
  });
})();

const cart = {};
const opts = {};                       // per-dish choices: { id: {spice, note} }
const spiceOk = d => !["Drinks", "Bar"].includes(d.cat) && !/Breads|^Rice$/.test(d.sub || "");
const optText = id => { const o = opts[id] || {}; return [o.spice ? `${o.spice} spice` : "", o.note || ""].filter(Boolean).join(", "); };
// "goes well with" pairings, first match wins
const PAIRS = [
  [d => /Rice & Noodles/.test(d.sub || "") || /Rice|Noodles/.test(d.name) && d.cat === "Chinese", ["i68", "i69", "i74"]],
  [d => /Momo/i.test(d.name), ["i5", "i4", "i117"]],
  [d => /Veg Main|Non-Veg Main/.test(d.sub || ""), ["i94", "i96", "i104"]],
  [d => /Soup/i.test(d.name) || d.cat === "Soups", ["i56", "i53", "i4"]]
];
function suggestions() {
  const inCart = lines().map(l => l.d).filter(Boolean), out = [];
  inCart.forEach(d => { const m = PAIRS.find(p => p[0](d)); if (m) m[1].forEach(id => { if (!cart[id] && !out.includes(id) && byId(id)) out.push(id); }); });
  if (inCart.length && !inCart.some(d => d.cat === "Drinks") && !cart.i117 && !out.includes("i117")) out.push("i117");
  return out.slice(0, 3);
}
const LAST_KEY = "ratan:last";
function lastOrder() { try { const o = JSON.parse(localStorage.getItem(LAST_KEY) || "null"); return o && o.cart && Object.keys(o.cart).every(id => byId(id)) && Object.keys(o.cart).length ? o : null; } catch (e) { return null; } }
function busyNow() {
  const n = goaNow(), st = hoursStatus(CONFIG.hours, n.day, n.mins);
  if (!st.open) return null;
  return (CONFIG.wait.peak || []).some(([a, b]) => n.mins >= a && n.mins < b);
}
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug = s => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
const pending = v => !v || /PLACEHOLDER/.test(v);
const byId = id => MENU.find(x => x.id === id);
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const lines = () => Object.entries(cart).map(([id, q]) => ({d: byId(id), q}));
const inr = n => CONFIG.currency + n.toLocaleString("en-IN");
// sum = everything with a fixed price; open = dishes priced "as per size" that the restaurant confirms
function totals() {
  let sum = 0; const open = [];
  lines().forEach(({d, q}) => { if (d.price == null) open.push(d.name); else sum += d.price * q; });
  return {sum, open};
}
function total() {
  if (!count()) return "—";
  return inr(totals().sum);
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
const dotHtml = d => d.diet ? `<i class="dot ${d.diet}" role="img" aria-label="${d.diet === "v" ? "Vegetarian" : "Non-vegetarian"}"></i>` : "";
function renderSpecials(){
  $("#spList").innerHTML = MENU.filter(d => d.cat === "Specials").map(d => `
    <article class="tile${cart[d.id] ? " in" : ""}">
      ${d.img ? `<div class="tile-media"><img class="bg" src="${IMG[d.img]}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="fg" src="${IMG[d.img]}" alt="${esc(d.name)}" loading="lazy" decoding="async"></div>` : ""}
      <div class="cap">
        <h3>${dotHtml(d)}${esc(d.name)}</h3>
        ${d.featured ? `<span class="pop">Popular</span>` : ""}
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
  return `<div class="${cls}" data-diet="${d.diet || ""}" data-q="${esc((d.name + " " + (d.desc || "") + " " + (d.sub || "")).toLowerCase())}">${thumb}<div class="info"><div class="nl${d.label.length > 8 ? " long" : ""}"><span class="nm">${dotHtml(d)}${esc(d.name)}</span><span class="lead-dots" aria-hidden="true"></span><span class="pr">${esc(d.label)}</span></div>${d.featured ? `<span class="pop">Popular</span>` : ""}${d.desc ? `<p class="ds">${esc(d.desc)}</p>` : ""}</div>${ctrl}</div>`;
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
      if (d.sub !== last) { last = d.sub; if (d.sub !== cat) html += `<h3 class="cat-sub">${esc(d.sub)}</h3>`; }
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

/* ---------- menu search + diet filter ---------- */
let dietFilter = "all";
function applyMenuFilter() {
  const q = ($("#msSearch").value || "").trim().toLowerCase();
  let shown = 0;
  $$("#menuBody .menu-cat").forEach(cat => {
    let catShown = 0;
    cat.querySelectorAll(".row").forEach(r => {
      const okQ = !q || r.dataset.q.includes(q);
      const okD = dietFilter === "all" || r.dataset.diet === dietFilter;
      r.hidden = !(okQ && okD);
      if (!r.hidden) catShown++;
    });
    // show a sub-heading only if some row follows it
    let sub = null, subHas = false;
    const flush = () => { if (sub) sub.hidden = !subHas; };
    [...cat.children].forEach(el => {
      if (el.classList.contains("cat-sub")) { flush(); sub = el; subHas = false; }
      else if (el.classList.contains("row") && !el.hidden) subHas = true;
    });
    flush();
    const note = cat.querySelector(".note");
    if (note) note.hidden = dietFilter !== "all" && !catShown;
    cat.hidden = !catShown;
    shown += catShown;
    const link = document.querySelector(`#msCats a[data-target="${cat.id}"]`);
    if (link) link.hidden = !catShown;
  });
  $("#msEmpty").hidden = shown > 0;
}
$("#msSearch").addEventListener("input", applyMenuFilter);
$("#msDiet").addEventListener("click", e => {
  const b = e.target.closest("button[data-diet]"); if (!b) return;
  dietFilter = b.dataset.diet;
  $$("#msDiet button").forEach(x => x.classList.toggle("on", x === b));
  applyMenuFilter();
});

/* ---------- dialogs ---------- */
let lastFocus = null;
const lock = () => {
  setTimeout(() => { if (typeof syncMini === "function") syncMini(); });
  const sheet = $("#menuSheet").classList.contains("open") || $("#cartDrawer").classList.contains("open");
  document.body.style.overflow = sheet ? "hidden" : "";
  if (window.ratanLenis) (sheet || document.body.classList.contains("loading")) ? window.ratanLenis.stop() : window.ratanLenis.start();
};
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
  $("#cartLines").innerHTML = ls.length ? ls.map(({d, q}) => {
    const o = opts[d.id] || {};
    const extra = spiceOk(d) ? `<div class="cl-opts"><select data-opt="spice" data-id="${d.id}" aria-label="Spice level for ${esc(d.name)}"><option value="">Spice level</option>${["Mild", "Medium", "Hot"].map(x => `<option${o.spice === x ? " selected" : ""}>${x}</option>`).join("")}</select><input data-opt="note" data-id="${d.id}" type="text" maxlength="60" value="${esc(o.note || "")}" placeholder="Extras or notes, e.g. extra egg" aria-label="Notes for ${esc(d.name)}"></div>` : "";
    return `<div class="cart-line"><div class="cl-main"><div><strong>${esc(d.name)}</strong><small>${esc(d.label)} each</small></div>${stepperHtml(d.id, q)}</div>${extra}</div>`;
  }).join("")
    : `<p class="empty">Your order is empty. Add a few dishes from the menu.</p>`;
  const lo = lastOrder(); $("#reorderBtn").hidden = !!ls.length || !lo;
  const sg = suggestions();
  $("#cartSuggest").hidden = !sg.length;
  $("#cartSuggest").innerHTML = sg.length ? `<h4>Goes well with</h4><div>${sg.map(id => { const d = byId(id); return `<button type="button" data-id="${id}" data-d="1">${dotHtml(d)}<span>${esc(d.name)}</span><b>${esc(d.label)}</b><i aria-hidden="true">＋</i></button>`; }).join("")}</div>` : "";
  const bz = busyNow(), w = $("#cartWait");
  w.hidden = bz === null;
  if (bz !== null) { w.className = "wait" + (bz ? " busy" : ""); w.textContent = bz ? `We're busy right now. Please allow about ${CONFIG.wait.busy}.` : `Usually ready in about ${CONFIG.wait.normal}.`; }
  $("#cartTotal").textContent = total();
  const t = totals(), note = $("#cartTotalNote");
  note.hidden = !t.open.length;
  note.textContent = t.open.length ? `Not included: ${t.open.join(", ")}. Priced by size, we confirm it when we reply.` : "";
  $("#cartCount").textContent = count() ? ` (${count()})` : "";
  $("#clearCart").hidden = !ls.length;
}
function syncMini(){
  const n = count(), mc = $("#miniCart");
  if (!mc) return;
  $("#mcCount").textContent = n + (n === 1 ? " item" : " items");
  $("#mcTotal").textContent = inr(totals().sum) + (totals().open.length ? "+" : "");
  const dialogOpen = $("#menuSheet").classList.contains("open") || $("#cartDrawer").classList.contains("open");
  mc.hidden = n === 0 || dialogOpen;
}
function onCartChange(id){
  if (id) updateCtrl(id);
  const n = count();
  ["#badgeTop", "#badgeBottom"].forEach(s => { $(s).textContent = n; $(s).classList.toggle("on", n > 0); });
  $("#msBar").hidden = n === 0;
  syncMini();
  $("#msBarCount").textContent = n + (n === 1 ? " item" : " items");
  renderCart();
}
document.addEventListener("change", e => { const t = e.target; if (t.dataset && t.dataset.opt === "spice") (opts[t.dataset.id] = opts[t.dataset.id] || {}).spice = t.value; });
document.addEventListener("input", e => { const t = e.target; if (t.dataset && t.dataset.opt === "note") (opts[t.dataset.id] = opts[t.dataset.id] || {}).note = t.value.trim(); });
$("#reorderBtn").addEventListener("click", () => {
  const lo = lastOrder(); if (!lo) return;
  Object.entries(lo.cart).forEach(([id, q]) => { cart[id] = q; });
  Object.assign(opts, lo.opts || {});
  Object.keys(lo.cart).forEach(id => updateCtrl(id));
  onCartChange();
});
document.addEventListener("click", e => {
  const step = e.target.closest("button[data-d]");
  if (step) {
    const d = byId(step.dataset.id);
    if (!d || d.view || d.available === false) return;
    cart[d.id] = Math.max(0, (cart[d.id] || 0) + Number(step.dataset.d));
    if (!cart[d.id]) { delete cart[d.id]; delete opts[d.id]; }
    onCartChange(d.id);
    return;
  }
  if (e.target.closest("[data-open-cart]")) { e.preventDefault(); openCart(); return; }
  if (e.target.closest("[data-open-menu]")) { e.preventDefault(); openMenu(); return; }
  if (e.target.closest("[data-clear]")) {
    Object.keys(cart).forEach(id => { delete cart[id]; delete opts[id]; updateCtrl(id); });
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
  const items = lines().map(({d, q}) => `- ${q} x ${d.name} (${d.label}) = ${d.price == null ? "price on request" : inr(d.price * q)}${optText(d.id) ? `\n   (${optText(d.id)})` : ""}`).join("\n");
  const t = totals();
  const totalLine = `Total: ${inr(t.sum)}${t.open.length ? ` + ${t.open.join(", ")} (price on request)` : ""}\n(Prices exclude VAT & GST, charged extra as applicable)`;
  return `Hi ${CONFIG.restaurant}, I'd like to place an order:\n\n${items}\n\n${totalLine}\n\nOrder type: ${orderType()}\nName: ${$("#on").value.trim()}\nPhone: ${$("#op").value.trim()}\n${$("#oaLabel").textContent}: ${$("#oa").value.trim() || "-"}\nNotes: ${$("#on2").value.trim() || "-"}`;
}
function checkOrder(){
  const msg = $("#orderMsg");
  if (!count()) { show(msg, "Your order is empty. Add at least one dish first.", "err"); return false; }
  if (!$("#orderForm").checkValidity()) { $("#orderForm").reportValidity(); show(msg, "Please fill in your name and phone number" + (orderType() === "Delivery" ? " and delivery address." : "."), "err"); return false; }
  return true;
}
const CUST_KEY = "ratan:cust";
try { const c = JSON.parse(localStorage.getItem(CUST_KEY) || "null"); if (c) { if (c.n) $("#on").value = c.n; if (c.p) $("#op").value = c.p; } } catch (e) {}
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!checkOrder()) return;
  try { localStorage.setItem(CUST_KEY, JSON.stringify({n: $("#on").value.trim(), p: $("#op").value.trim()})); } catch (e) {}
  try { localStorage.setItem(LAST_KEY, JSON.stringify({cart: Object.assign({}, cart), opts: JSON.parse(JSON.stringify(opts))})); } catch (e) {}
  sendWhatsApp(orderText(), $("#orderMsg"), "Your order is ready in WhatsApp. Please press Send so we receive it. We will reply to confirm.");
  $("#orderMsg").insertAdjacentHTML("beforeend", `<ol class="track" aria-label="Order progress"><li class="done">Sent to WhatsApp</li><li>We confirm</li><li>Preparing</li><li>Ready</li></ol>`);
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

$("#grpForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = $("#grpForm"), msg = $("#grpMsg");
  if (!f.checkValidity()) { f.reportValidity(); show(msg, "Please fill in the date, headcount, your name and a valid phone number.", "err"); return; }
  sendWhatsApp(`Hi ${CONFIG.restaurant}, I'd like to enquire about a group booking.\nOccasion: ${$("#go").value}\nDate: ${$("#gd").value}\nGuests: ${$("#gg").value}\nName: ${$("#gn").value.trim()}\nPhone: ${$("#gp").value.trim()}`, msg, "Your enquiry is ready in WhatsApp. Please press Send. We will reply to confirm availability.");
});
(function groupDefaults(){ const g = $("#gg"); if (g) g.min = CONFIG.groupMinGuests; const d = $("#gd"); if (d) { const now = new Date(); d.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10); } })();

/* ---------- fill the page ---------- */
$$('[data-img]').forEach(el => {
  const src = IMG[el.dataset.img];
  if (!src) return;
  el.src = src;
  el.decoding = 'async';
  if (el.dataset.img === 'logo') { el.width = 1078; el.height = 572; }
});
$$("#strip img").forEach(img => {
  const setRatio = () => img.style.setProperty("--r-img", (img.naturalWidth / img.naturalHeight).toFixed(4));
  if (img.complete && img.naturalWidth) setRatio(); else img.addEventListener("load", setRatio);
});
$("#addr").innerHTML = [CONFIG.legalName, ...CONFIG.address].map(esc).join("<br>");
$("#phones").innerHTML = CONFIG.phones.map(esc).join("<br>");
$("#mapsLink").href = CONFIG.mapsUrl;
$("#waLink").href = `https://wa.me/${CONFIG.whatsappNumber}`;
$("#callLink").href = "tel:+" + CONFIG.whatsappNumber;
if (pending(CONFIG.email)) $("#emailBlock").hidden = true; else $("#emailLine").textContent = CONFIG.email;
// optional sections
(function optionalSections() {
  const tm = CONFIG.team || {};
  if (tm.title && tm.text) { $("#teamTitle").textContent = tm.title; $("#teamText").textContent = tm.text; const im = $("#teamImg"); im.src = IMG[tm.img] || ""; im.alt = tm.title; $("#team").hidden = false; }
  const ig = $("#igCard"); if (ig) { ig.href = CONFIG.instagram; $("#igHandleText").textContent = "@" + CONFIG.instagram.replace(/\/+$/, "").split("/").pop(); }
  Object.entries({specials: "招牌菜", "home-menu": "菜单", reserve: "订座", gallery: "画廊", visit: "地址", groups: "聚会"}).forEach(([id, t]) => {
    const e = document.querySelector(`#${id} .eyebrow`); if (e) e.insertAdjacentHTML("beforeend", `<span class="cn" lang="zh" aria-hidden="true">${t}</span>`);
  });
  if (CONFIG.fssai) { const f = $("#fssai"); f.hidden = false; f.textContent = " · FSSAI Lic. No. " + CONFIG.fssai; }
  const ts = CONFIG.todaySpecial;
  if (ts && ts.title) { $("#tsTitle").textContent = ts.title; $("#tsText").textContent = ts.text || ""; $("#tsPrice").textContent = ts.price || ""; $("#todaySpecial").hidden = false; }
  const rv = (CONFIG.reviews || []).filter(r => r && r.text);
  if (rv.length) {
    const r = CONFIG.rating || {};
    $("#rvSum").innerHTML = r.value ? `<span class="rv-big">${esc(r.value)}</span> <span class="stars" aria-hidden="true">★★★★★</span> <span>${r.count ? esc(r.count) + " reviews on " : "on "}${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">Google</a>` : "Google"}</span>` : "";
    $("#rvGrid").innerHTML = rv.map(x => `<figure class="rv"><div class="stars" aria-label="${Number(x.stars) || 5} out of 5">${"★".repeat(Number(x.stars) || 5)}</div><blockquote>${esc(x.text)}</blockquote><figcaption>${esc(x.name || "Guest")}</figcaption></figure>`).join("");
    $("#reviews").hidden = false;
  }
})();
const igHandle = (() => { try { return "@" + new URL(CONFIG.instagram).pathname.replace(/\//g, ""); } catch (e) { return "Instagram"; } })();
$("#igSlot").innerHTML = pending(CONFIG.instagram)
  ? `<span class="pending">Instagram link to be added</span>`
  : `<a class="link" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram ${esc(igHandle)}</a>`;
$("#platforms").innerHTML = [["Zomato", CONFIG.zomato], ["Swiggy", CONFIG.swiggy]].map(([name, url]) =>
  pending(url)
    ? `<span class="pending">${name}: verified link to be added</span>`
    : `<a class="btn btn-line" href="${esc(url)}" target="_blank" rel="noopener">Order on ${name}</a>`).join("");
$("#footContact").innerHTML =
  `<p>${CONFIG.phones.map(p => `<a href="tel:${esc(p.replace(/[^\d+]/g, ""))}">${esc(p)}</a>`).join("<br>")}</p>` +
  `<p>${CONFIG.address.map(esc).join("<br>")}</p>` +
  (pending(CONFIG.email) ? "" : `<p><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a></p>`);
$("#footSocial").innerHTML = [["Instagram", CONFIG.instagram], ["Zomato", CONFIG.zomato], ["Swiggy", CONFIG.swiggy]]
  .filter(([, url]) => !pending(url)).map(([name, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${name}</a>`).join("");
$$("[data-maps]").forEach(a => { a.href = CONFIG.mapsUrl; });
$$("[data-wa]").forEach(a => { a.href = `https://wa.me/${CONFIG.whatsappNumber}`; });
$$("[data-call]").forEach(a => { a.href = "tel:+" + CONFIG.whatsappNumber; });
$("#year").textContent = new Date().getFullYear();
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
    `<img class="hero-img${i === 0 ? " on" : ""}" src="${IMG[s.img]}" alt="${esc(s.alt)}" ${s.pos ? ` style="object-position:${esc(s.pos)}"` : ""} decoding="async"${i === 0 ? ' fetchpriority="high"' : ""}>`).join("");
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

/* ---------- live opening status ---------- */
(function () {
  const nodes = $$("[data-live]"), notes = $$("[data-closed-note]"), table = $("#hoursTable");
  // The static table in index.html is only a no-JS fallback; rebuild it from CONFIG so it can never drift.
  if (table && table.tBodies[0]) {
    table.tBodies[0].innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
      const list = CONFIG.hours[d] || [];
      const cell = list.length
        ? list.map(([o, c]) => `${fmtClock(o)} – ${fmtClock(c)}`).join("<br>") + (list.length === 1 ? `<br><small>Closed after ${fmtClock(list[0][1])}</small>` : "")
        : "Closed";
      return `<tr data-day="${d}"><th scope="row">${DAY_NAMES[d]}</th><td>${cell}</td></tr>`;
    }).join("");
  }
  const rows = table ? [...table.querySelectorAll("tr[data-day]")] : [];
  let last = "", timer = null;
  function paint() {
    clearTimeout(timer);
    const now = goaNow(), st = hoursStatus(CONFIG.hours, now.day, now.mins);
    const key = [now.day, st.state, st.label, st.detail].join("|");
    if (key !== last) {          // only touch the DOM when something changed, so screen readers are not spammed
      last = key;
      nodes.forEach(n => {
        n.dataset.state = st.state;
        n.querySelector(".live-state").textContent = st.label;
        n.querySelector(".live-detail").textContent = st.detail;
      });
      notes.forEach(n => {
        n.hidden = st.open;
        if (st.open) return;
        const when = st.detail.replace(/ · in .*$/, "");
        n.textContent = `We're closed right now. ${when}. ` + (n.dataset.closedNote === "order"
          ? "You can still send your order and we'll confirm it once we're open."
          : "You can still send your request and we'll reply once we're open.");
      });
      rows.forEach(r => {
        const on = Number(r.dataset.day) === now.day;
        r.classList.toggle("today", on);
        const th = r.querySelector("th");
        if (on) th.setAttribute("aria-current", "date"); else th.removeAttribute("aria-current");
      });
    }
    timer = setTimeout(paint, (60 - now.secs) * 1000 + 250);   // wake just after the next minute ticks over
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) paint(); });
  paint();
})();

/* ---------- scroll reveal (one system; the class is removed once it has played) ---------- */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const sel = ["#about .about-grid > *", "#specials .wrap > *", "#spList", "#home-menu .wrap > *", ".story-grid > *",
               "#gallery .wrap > *", "#reserve .res-grid > *", "#visit .wrap > .eyebrow", "#visit .wrap > h2", "#visit .vb",
               ".foot-cta-in > *", ".foot-grid > *"];
  const els = [...new Set($$(sel.join(",")))];
  const show = el => {
    el.classList.add("in-view");
    setTimeout(() => { el.classList.remove("reveal", "in-view"); el.style.removeProperty("--rd"); }, 1300);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    // also reveal anything already scrolled past (deep links such as /#reserve), or it would stay invisible
    if (en.isIntersecting || en.boundingClientRect.top < 0) { io.unobserve(en.target); show(en.target); }
  }), { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  els.forEach(el => {
    el.classList.add("reveal");
    const i = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
    el.style.setProperty("--rd", (Math.max(0, i) % 4) * 80 + "ms");
    io.observe(el);
  });
})();

/* ---------- entrance gate ---------- */
(function () {
  const root = document.documentElement, body = document.body;
  const gate = $("#gate"), fill = $("#gateFill");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!gate) { root.classList.add("ready"); body.classList.remove("loading"); lock(); return; }
  let seen = false;
  try { seen = sessionStorage.getItem("ratan:gate") === "1"; } catch (e) {}
  const MIN = reduce ? 0 : seen ? 700 : 2200;   // first visit gets the full intro, later page loads a short one
  const MAX = 5500;                              // never hold anyone longer than this, whatever is slow
  const t0 = performance.now();
  const hero = $("#heroSlides .hero-img");
  const heroDone = (!hero ? Promise.resolve() : hero.decode ? hero.decode() : new Promise(r => { if (hero.complete) r(); else hero.onload = hero.onerror = r; })).catch(() => {});
  const fontsDone = (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).catch(() => {});
  const loadDone = document.readyState === "complete" ? Promise.resolve() : new Promise(r => window.addEventListener("load", r, { once: true }));
  let assets = 0, shown = 0, last = t0, finished = false;
  [[heroDone, 50], [fontsDone, 20], [loadDone, 30]].forEach(([pr, w]) => pr.then(() => { assets += w; }));
  const paint = v => { fill.style.transform = "scaleX(" + (v / 100).toFixed(4) + ")"; };
  const leave = () => {
    if (finished) return;
    finished = true;
    paint(100);
    try { sessionStorage.setItem("ratan:gate", "1"); } catch (e) {}
    gate.classList.add("is-leaving");
    setTimeout(() => root.classList.add("ready"), reduce ? 0 : 800);     // hero starts rising as the doors part
    setTimeout(() => { gate.remove(); body.classList.remove("loading"); lock(); }, reduce ? 50 : 1750);
  };
  const tick = now => {
    if (finished) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const target = Math.min(MIN ? Math.min(1, (now - t0) / MIN) * 100 : 100, assets);
    shown += (target - shown) * (1 - Math.exp(-dt * 7));
    if (target >= 100 && shown > 99.4) shown = 100;
    paint(shown);
    if (shown >= 100) leave(); else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  setTimeout(leave, MAX);
})();

/* ---------- smooth scrolling (progressive enhancement: the page works without it) ---------- */
(function () {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function start() {
    if (reduce || !window.Lenis || window.ratanLenis) return;
    try {
      window.ratanLenis = new window.Lenis({ autoRaf: true, smoothWheel: true, syncTouch: false, lerp: 0.085 });
      root.classList.add("lenis-enabled");
      lock();
    } catch (err) { root.classList.remove("lenis-enabled"); }
  }
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || !window.ratanLenis) return;
    if (a.matches("[data-open-menu],[data-open-cart],[data-target]") || a.closest(".menu-sheet,.drawer")) return;
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.ratanLenis.scrollTo(id === "#top" ? 0 : target, { offset: id === "#top" ? 0 : -64 });
    history.replaceState(null, "", id);
  });
  if (window.Lenis) start();
  else { const tag = $("#lenis-js"); if (tag) tag.addEventListener("load", start, { once: true }); else window.addEventListener("load", start, { once: true }); }
})();


/* ---------- V8 polish: parallax, section dots, cursor ring, call chip ---------- */
(function polish() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = $("#hero"), slides = hero && hero.querySelector(".hero-slides");
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY;
      if (slides && !reduce && y < innerHeight * 1.2) slides.style.transform = `translate3d(0,${Math.round(y * 0.22)}px,0)`;
      const chip = $("#callChip"); if (chip) chip.classList.toggle("show", y > innerHeight * 0.7);
    });
  }
  addEventListener("scroll", onScroll, {passive: true}); onScroll();

  // side dots
  const ids = [["hero", "Home"], ["about", "Our story"], ["specials", "Signature dishes"], ["home-menu", "Menu"], ["gallery", "Gallery"], ["reserve", "Reserve"], ["visit", "Find us"], ["groups", "Groups"]].filter(([id]) => document.getElementById(id));
  const nav = $("#dotsNav");
  nav.innerHTML = ids.map(([id, l]) => `<a href="#${id}" data-dot="${id}" aria-label="${l}"><span>${l}</span></a>`).join("");
  const dots = new Map($$("#dotsNav a").map(a => [a.dataset.dot, a]));
  const io = new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) { dots.forEach(a => a.classList.remove("on")); dots.get(x.target.id).classList.add("on"); } }), {rootMargin: "-45% 0px -50% 0px"});
  ids.forEach(([id]) => io.observe(document.getElementById(id)));

  // cursor ring (mouse devices only)
  const ring = $("#cursorRing");
  if (ring && !reduce && matchMedia("(hover:hover) and (pointer:fine)").matches) {
    let tx = -100, ty = -100, x = tx, y = ty, on = false;
    addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; if (!on) { on = true; ring.classList.add("on"); } }, {passive: true});
    document.addEventListener("mouseover", e => ring.classList.toggle("hot", !!e.target.closest("a,button,select,input,label,.tile,.row")));
    document.addEventListener("mouseleave", () => { on = false; ring.classList.remove("on"); });
    (function loop() { x += (tx - x) * 0.2; y += (ty - y) * 0.2; ring.style.transform = `translate3d(${x}px,${y}px,0)`; requestAnimationFrame(loop); })();
  }
})();
