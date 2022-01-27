
puts 'Wiping Old Data'
User.destroy_all
Item.destroy_all
Category.destroy_all
Review.destroy_all

puts 'Seeding Users'
# Users

  defaultUser = User.create(username: "vintagebandit", email: "vintagebandit123@gmail.com", password: "buyer1", password_confirmation: "buyer1")
  defaultUser2 = User.create(username: "xboxiswack1", email: "xboxhater@gmail.com", password: "buyer2", password_confirmation: "buyer2")

puts 'Seeding Categories'
# Categories

  hats = Category.create(name: "hats")
  shirts = Category.create(name: "shirts")
  jerseys = Category.create(name: "jerseys")
  jackets = Category.create(name: "jackets")
  sweatshirts = Category.create(name: "sweatshirts")
  shorts = Category.create(name: "shorts")
  pants = Category.create(name: "pants")


  puts 'Seeding Items'
# Items 
  hated = Item.create(name: "VTG Edwards Contractors Hat", description: "Vintage Edwards Contractors Strapback, Drew Pearson tag", image_url: "/images/IMG_8503.jpg", size: "OS", price: 10, category: hats)
  jerseymagic = Item.create(name: "VTG 90's Orlando Magic O'Neal Jersey", description: "Vintage 90's Champion Orlando Magic O'Neal Jersey. Great condition", image_url: "/images/IMG_8380 2.jpeg", size: "44", price: 295, category: jerseys)
  jacketpeter = Item.create(name: "Peterbilt Jacket", description: "Peterbilt Jacket. Good condition", image_url: "/images/IMG_8390.jpeg", size: "XL", price: 50, category: jackets)
  jacketbrian = Item.create(name: "VTG Camino Bomber", description: "Vintage El Camino Bomber Jacket, Holloway tag. Great condition", image_url: "/images/IMG_9933.CR2.jpg", size: "L", price: 50, category: jackets)
  ssmad = Item.create(name: "VTG 80's Class Sweatshirt", description: "Vintage 80's Class Hoodie Sweatshirt. Vintage wear", image_url: "/images/IMG_8502.jpg", size: "L", price: 20, category: sweatshirts)
  hatbar = Item.create(name: "VTG Wyoming Bar Hat", description: "Vintage Hole in the Wall Bar, Wyoming, Strapback", image_url: "/images/IMG_0613.CR2.jpg", size: "OS", price: 20, category: hats)
  shirtrace = Item.create(name: "1998 Winston Drag Racing T-Shirt", description: "Vintage 98' Winston Drag Racing Tee, Nice vintage wear. No tears", image_url: "/images/IMG_0819.CR2.jpg", size: "XL", price: 40, category: shirts)
  shirtno = Item.create(name: "1987 Final Four T-Shirt", description: "Vintage 87' Final Four New Orleans Tee, Single stitch. No tears", image_url: "/images/IMG_0981.CR2.jpg", size: "S", price: 25, category: shirts)
  shirtnsync = Item.create(name: "Y2K N'SYNC Tour T-Shirt", description: "2000 N'SYNC Tour Tee, Nice vintage fade. No tears", image_url: "/images/IMG_8506.jpg", size: "S", price: 45, category: shirts)
  jacketrace = Item.create(name: "VTG Racing Bomber", description: "Vintage Holladay Racing Bomber Jacket. Nice vintage wear", image_url: "/images/IMG_9845.CR2.jpg", size: "XS", price: 40, category: jackets)
  shirtgeneral = Item.create(name: "80's Surgeon General Humor T-Shirt", description: "Vintage 80's Humor Surgeon General Tee, Single stitch. No tears", image_url: "/images/IMG_8500.jpg", size: "XL", price: 20, category: shirts)
  hatno = Item.create(name: "1997 New Orleans Superbowl Hat", description: "Vintage 97' New Orleans, Louisiana Superbowl Snapback, No flaws", image_url: "/images/IMG_0700.CR2.jpg" , size: "OS", price: 30, category: hats)
  pants550 = Item.create(name: "VTG 550 Levi Jeans", description: "Vintage Levi 550 Jeans , Fair condition, Nice vintage wear, Tag says 36in length but is 32in", image_url: "/images/IMG_8481.jpeg", size: "32x32", price: 30, category: pants)
  hat49 = Item.create(name: "90's 49ERS Corduroy Hat", description: "Vintage 90's San Francisco 49ers Corduroy Snapback Amapro, No flaws", image_url: "/images/IMG_8496.jpg", size: "OS", price: 110, category: hats)
  jacketballoon = Item.create(name: "VTG Balloon Platoon Bomber", description: "Vintage Hot Air Balloon Platoon Bomber Jacet. Great condition", image_url: "/images/IMG_1181.CR2.jpg", size: "XXL", price: 55, category: jackets)
  ssten = Item.create(name: "1995 Big Ten Champions Sweatshirt", description: "Vintage 95' Northwestern Big Ten Sweatshirt. No tears", image_url: "/images/IMG_0034.CR2.jpg", size: "XL", price: 30, category: sweatshirts)
  hatcap = Item.create(name: "VTG Capital Lumber Hat", description: "Vintage Capital Lumber, Strapback", image_url: "/images/IMG_0507.CR2.jpg", size: "OS", price: 15, category: hats)
  jacketvike = Item.create(name: "VTG 90s Vikings Jacket", description: "Vintage 90's Pro Line Apex Vikings NFL Jacket. Broken zippers, tear on back", image_url: "/images/IMG_8497.jpg", size: "L", price: 95, category: jackets)
  shirtfish = Item.create(name: "1995 Fishing Tournament T-Shirt", description: "Vintage 95' Arizona Fishing Tournament Tee, Nice vintage wear. No tears", image_url: "/images/IMG_0883.CR2.jpg", size: "L", price: 20, category: shirts)
  ssgb = Item.create(name: "1997 Greenbay Packers Sweatshirt", description: "Vintage 97' NFC Champions Packers Sweatshirt, Nice vintage fade. No tears", image_url: "/images/IMG_8498.jpg", size: "XL", price: 35, category: sweatshirts)  
  ssgas = Item.create(name: "VTG 90's Sweatshirt", description: "Vintage 90's Texaco Sweatshirt, Nice vintage wear, tears at hems", image_url: "/images/IMG_0017.CR2.jpg", size: "XL", price: 15, category: sweatshirts)
  ssbronco = Item.create(name: "1999 Denver Bronco Superbowl Champs Sweatshirt", description: "Vintage 99' Bronco Superbowl Champion Sweatshirt, Nice vintage wear, small stain on front", image_url: "/images/IMG_0846.CR2.jpg", size: "L", price: 40, category: sweatshirts)
  jacketaz = Item.create(name: "VTG 70's Arizona Bomber", description: "Vintage 70's DeLong Arizona Bomber Jacket. Nice vintage wear", image_url: "/images/IMG_8499.jpg", size: "XL", price: 35, category: jackets)
  jacketant = Item.create(name: "VTG Knights Bomber", description: "Vintage St. Anthony Knights Bomber Jacket. Good condition", image_url: "/images/IMG_9941.CR2.jpg", size: "XXL", price: 30, category: jackets)
  jerseybulls = Item.create(name: "Chicago Bulls Jersey", description: "Derek Rose Chicago Bulls Jersey. Good condition", image_url: "/images/IMG_8382.jpeg", size: "48", price: 30, category: jerseys)
  ssmad = Item.create(name: "VTG 80's Class Sweatshirt", description: "Vintage 80's Class Hoodie Sweatshirt. Vintage wear", image_url: "/images/IMG_8502.jpg", size: "L", price: 20, category: sweatshirts)
  jerseystart = Item.create(name: "VTG 90's Starter Jersey", description: "Vintage 90's AFC Blank Starter Jersey, Good condition", image_url: "/images/D537DF2C-4037-419C-861B-0CD5395C26B6_1_105_c.jpeg", size: "M", price: 20, category: jerseys)
  shortsgarf = Item.create(name: "VTG 80's Garfield Shorts", description: "Vintage 80's Era Garfield Shorts, Good condition, Ripped tag", image_url: "/images/IMG_8485.jpeg", size: "S", price: 80, category: shorts)
  pants505 = Item.create(name: "VTG 90's Levi Jeans", description: "Vintage 90's Levi 505 Jeans XX , Good condition, Nice vintage fade, Distressed hems", image_url: "/images/IMG_8474.jpeg", size: "36x30", price: 65, category: pants)
  hatabf = Item.create(name: "VTG ABF Hat", description: "Vintage ABF Strapback, Youngin tag, Faded strap", image_url: "/images/IMG_8504.jpg", size: "OS", price: 15, category: hats)



  
  puts 'Seeding Reviews'
  # Reviews
  
    reviewOne = Review.create(comment: "this is 🔥!!!", user: defaultUser, item: hat49)
    reviewTwo = Review.create(comment: "Eww my grandma would wear this!", user: defaultUser2, item: jerseymagic)
    reviewThree = Review.create(comment: "Definite cop. 😎😎", user: defaultUser, item: shirtrace)
    reviewFour = Review.create(comment: "I would buy this, but im broke. 😖", user: defaultUser2, item: hatbar)
  
