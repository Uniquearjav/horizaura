import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.Products.create({
    data: {
        sku : "6H-EGCE-WBQM",
        asin1 : "B0CZ79XKS2",
        name : "HORIZAURA Velvet Cafeteria Armchair with Gold Legs - Chair for Outdoor and Cafeteria - Stong, Durable Chair",
        description : "This elegant velvet accent chair with gold metal legs is perfect for adding style and comfort to your living space. Upholstered in plush velvet with a loose, relaxing fit, this chair will become your favorite spot to unwind at the end of a long day. The gold metal legs add just the right touch of glamour. At 46 cm wide and 55 cm tall, this chair is compact yet comfortable enough for lounging with a book or napping between tasks. Suitable for indoor use, it will complement both traditional and modern interiors in your living room, dining room, bedroom, home office, guest room or den. The neutral velvet and classic design also make this chair a chic, child-friendly addition to a nursery. Handcrafted with care, this accent chair is certain to become the new focal point of your space.",
        price: 12000,
        product_id: "B0CZ79XKS2",
        image_url : "https://m.media-amazon.com/images/I/41DMGgIm+BL.jpg",
        mrp : 35000
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
  //console.log(allUsers)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })