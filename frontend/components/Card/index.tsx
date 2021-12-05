import React from "react";

const products = [
  {
    id: 1,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 4,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 5,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Piękny uległy",
    href: "#",
    price: "10zł",
    imageSrc:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/261257794_1194612657694224_4988152416432269956_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=tjQY165RNVkAX-FFF7_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=884569a4eee1080ce58625a06db33830&oe=61D39422",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  // More products...
];

const Card = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
