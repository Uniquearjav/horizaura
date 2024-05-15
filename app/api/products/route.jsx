import { NextRequest, NextResponse } from 'next/server'
export const productsArray = [
  {
      "id": 1,
      "seller_sku": "6H_EGCE_WBQM",
      "asin1": "B0CZ79XKS2",
      "item_name": "HORIZAURA Velvet Cafeteria Armchair with Gold Legs _ Chair for Outdoor and Cafeteria _ Stong, Durable Chair",
      "item_description": "This elegant velvet accent chair with gold metal legs is perfect for adding style and comfort to your living space. Upholstered in plush velvet with a loose, relaxing fit, this chair will become your favorite spot to unwind at the end of a long day. The gold metal legs add just the right touch of glamour. At 46 cm wide and 55 cm tall, this chair is compact yet comfortable enough for lounging with a book or napping between tasks. Suitable for indoor use, it will complement both traditional and modern interiors in your living room, dining room, bedroom, home office, guest room or den. The neutral velvet and classNameic design also make this chair a chic, child_friendly addition to a nursery. Handcrafted with care, this accent chair is certain to become the new focal point of your space.",
      "listing_id": "0327BSU8GZ2",
      "price": 12000,
      "quantity": 20,
      "open_date": "2024_03_27 16:56:19 IST",
      "product_id_type": 1,
      "item_note": "",
      "item_condition": 11,
      "will_ship_internationally": "",
      "expedited_shipping": "",
      "product_id": "B0CZ79XKS2",
      "Business Price": "",
      "image_url": "https://m.media_amazon.com/images/I/41DMGgIm+BL.jpg",
      "maximum_retail_price": 35000
    },
    {
      "id": 2,
      "seller_sku": "GN_FMB6_GZUX",
      "asin1": "B0CY9D8CMK",
      "item_name": "HORIZAURA Dark Blue Velvet Dining Chairs _ Stylish and Comfortable _ Modern Retro Design with Elegant Square Patterns _ Ergonomic Seating for Dining Room or Office _ Dining, Outdoor, Bar Chair",
      "item_description": "Upgrade your dining experience with our Dark Blue and Black Velvet Dining Chairs. These stylish chairs offer both luxury and comfort, featuring a modern retro design with elegant square patterns. Crafted for ergonomic seating, they provide a cozy and relaxing atmosphere, perfect for long dinners or office meetings. Equipped with practical plastic floor protectors and anti_slip pads, these chairs ensure stability and prevent floor scratches. The soft velvet cover adds a touch of sophistication to any dining room or office space. Elevate your décor and enjoy the perfect combination of style and functionality with our versatile dining chair.",
      "listing_id": "0317B2OO13G",
      "price": 8000,
      "quantity": 10,
      "open_date": "2024_03_17 12:49:05 IST",
      "product_id_type": 1,
      "item_note": "",
      "item_condition": 11,
      "will_ship_internationally": "",
      "expedited_shipping": "",
      "product_id": "B0CY9D8CMK",
      "image_url": "https://m.media_amazon.com/images/I/316XxEgxrUL.jpg",
      "Business Price": "",
      "maximum_retail_price": 24000
    },
    {
      "id": 3,
      "seller_sku": "K1_F14N_O6HE",
      "asin1": "B0CYL81X3S",
      "item_name": "HORIZAURA Luxurious Velvet Dining Chairs _ Modern Black Tapered Legs _ Comfortable & Stylish Furniture for Dining Room _ Durable Steel Frame _ Chairs for Outdoor, Office and Club",
      "item_description": "Elevate your dining experience with our exquisite Velvet Dining Chairs, designed to add a touch of luxury to your space. Crafted with opulent diamond embroidery on the backrest, these chairs boast a sleek and sophisticated look inspired by art deco elegance. The plush velvet upholstery not only offers a soft and comfortable seating experience but also adds a sense of richness to your dining area. The sleek black tapered legs provide a modern contrast, enhancing the overall aesthetic appeal.Our chairs are not just about style; they are also designed with functionality in mind. The black powder_coated steel frame ensures durability and longevity, while the adjustable pads under the legs protect your floors from scratches and provide stability on any surface. Whether you have hardwood flooring or carpets, rest assured that your floors are safe.",
      "listing_id": "0320BALNYZ2",
      "price": 6000,
      "quantity": 20,
      "open_date": "2024_03_20 12:46:38 IST",
      "product_id_type": 1,
      "item_note": "",
      "item_condition": 11,
      "will_ship_internationally": "",
      "expedited_shipping": "",
      "product_id": "B0CYL81X3S",
      "Business Price": "",
      "image_url": "https://m.media_amazon.com/images/I/314KqYO1ceL.jpg",
      "maximum_retail_price": 24000
    },
    {
      "id": 4,
      "seller_sku": "MI_YVVF_46MQ",
      "asin1": "B0CZ7B7PKQ",
      "item_name": "HORIZAURA Luxury Dining Chair with Polypropylene Seat, Beech Wood Legs, White",
      "item_description": "This Casey Dining Chair offers comfortable seating and durable construction. With a polypropylene seat and backrest lined with soft sponge padding, it provides cushioned support for dining in comfort. The seat is also covered in smooth artificial leather that is easy to clean. For stability, it has sturdy beech wood legs that give this chair a classNameic look suited for any dining area. The wood legs are finished to protect against scratches and damage from regular use. At a height of 45cm, this chair is easy to pull in and out from the table. With its ability to hold weights up to 100kg, the chair is suited for all members of the family. Suitable for indoor use, this chair will last for years of family meals and gatherings.",
      "listing_id": "0327BSZXTCP",
      "price": 5000,
      "quantity": 12,
      "open_date": "2024_03_27 17:05:46 IST",
      "product_id_type": 1,
      "item_note": "",
      "item_condition": 11,
      "will_ship_internationally": "",
      "expedited_shipping": "",
      "product_id": "B0CZ7B7PKQ",
      "Business Price": "",
      "image_url": "https://m.media_amazon.com/images/I/51IMeXBr+KL.jpg",
      "maximum_retail_price": 15000
    },
    {
      "id": 5,
      "seller_sku": "R5_9ARX_4BAM",
      "asin1": "B0CY9GK2VZ",
      "item_name": "HORIZAURA Premium Red Cushioned Chair Velvet Upholstery, Strong Wooden Frame | Perfect for Living Room, Bedroom | Cozy & Stylish Furniture for Relaxation | Club and Party Chair",
      "item_description": "Transform your space with our luxurious Wine Red Accent Chair. Crafted with premium fabric upholstery, this chair offers both style and comfort. The sturdy wooden frame ensures stability and longevity, providing a reliable seating option for years to come. The well_padded seat and backrest offer ergonomic support, perfect for unwinding after a long day. Versatile placement options make it ideal for any cozy corner in your living room or bedroom. With easy maintenance fabric, cleaning is a breeze, ensuring your chair looks its best with minimal effort. Elevate your décor with this eye_catching accent chair, backed by our satisfaction guarantee.",
      "listing_id": "0317B329OSP",
      "price": 7000,
      "quantity": 20,
      "open_date": "2024_03_17 14:42:48 IST",
      "product_id_type": 1,
      "item_note": "",
      "item_condition": 11,
      "will_ship_internationally": "",
      "expedited_shipping": "",
      "product_id": "B0CY9GK2VZ",
      "Business Price": 0,
      "image_url": "https://m.media_amazon.com/images/I/41JmK9gkXVL.jpg",
      "maximum_retail_price": 25000
    }]

    export function GET(request){
      // get the query object from the request
      const searchParams = request.nextUrl.searchParams.get('asin')
      // search the products array for the product with the asin
      const product = productsArray.find(product => product.asin1 === searchParams)
      console.log(product)
      return NextResponse.json(product)
    }