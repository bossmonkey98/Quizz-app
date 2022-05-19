import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "TV shows",
    img:"https://i.postimg.cc/FKWCdv2Q/omar-rodriguez-Gj-Ol79-Qjf-D8-unsplash.jpg",
    description: "Quizes based on TV shows",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    img:"https://i.postimg.cc/DzVH5x8W/istockphoto-1364827675-1024x1024.jpg",
    description: "Quizes based on sports",
  },
  {
    _id: uuid(),
    categoryName: "Geography",
    img:"https://i.postimg.cc/kgCpLfxL/istockphoto-1300113567-1024x1024.jpg",
    description: "Quizes based on Geography",
  },
  {
    _id: uuid(),
    categoryName: "Science",
    img:"https://i.postimg.cc/HkthmXzn/istockphoto-1321462048-1024x1024.jpg",
    description: "Quizes based on Sciencs and technology",
  },
];
