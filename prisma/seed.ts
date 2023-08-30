import { faker } from "@faker-js/faker";
import { Currency, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  
  const categoryIds:string[] = [];
  for (let i = 0; i < 100; i++) {
    const category = await prisma.productCategory.create({
      data: {
        title: faker.commerce.department(),
        description: faker.lorem.sentence(),
      },
    });
    categoryIds.push(category.id);
  }

  // Seed products
  for (let i = 0; i < 100000; i++) {
    if (i % 1000 === 0) {
      console.log('Product index:', i);
    }
    const categoryId = categoryIds[i % 100];
    await prisma.product.create({
      data: {
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        currencyType: getRandomCurrencyType(),
        images: {
          create: [
            {
              link: faker.image.url(),
              alt: faker.lorem.word(),
            },
            {
              link: faker.image.url(),
              alt: faker.lorem.word(),
            },
          ],
        },
        category: {
          connect: {
            id: categoryId
          },
        },
      },
    });
  }
}

function getRandomCurrencyType() {
  const currencyTypes:Currency[] = ['BRL', 'USD', 'EUR'];
  const randomIndex = Math.floor(Math.random() * currencyTypes.length);
  return currencyTypes[randomIndex];
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
