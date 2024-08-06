import aromicoImg from "../img/best_img/solimo.jpg";
import aromisticoImg from "../img/best_img/aromistico.jpg";
import prestoImg from "../img/best_img/presto.jpg";

export default function useCardList() {
  const coffeeCards = [
    {
      title: "Aromistico Coffee 1 kg",
      img: aromisticoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Brazil",
      price: 6.99,
      id: 1,
    },
    {
      title: "Comfoods Coffee 1 kg",
      img: prestoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Kenya",
      price: 7.1,
      id: 2,
    },
    {
      title: "Tchibo Coffee 1 kg",
      img: aromicoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Columbia",
      price: 8,
      id: 3,
    },
    {
      title: "Vinacafe Coffee 1 kg",
      img: aromicoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Columbia",
      price: 8,
      id: 4,
    },
    {
      title: "Paulig Coffee 1 kg",
      img: aromisticoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Brazil",
      price: 6.99,
      id: 5,
    },
    {
      title: "Franck Coffee 1 kg",
      img: aromisticoImg,
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum consequuntur esse. Velit ex quaerat tempora est qui facilis atque quis",
      country: "Brazil",
      price: 6.99,
      id: 6,
    },
  ];

  const getAllCards = () => {
    return coffeeCards.map((coffeeCard) => ({
      title: coffeeCard.title,
      img: coffeeCard.img,
      descr: coffeeCard.descr,
      country: coffeeCard.country,
      price: coffeeCard.price,
      id: coffeeCard.id,
    }));
  };

  const getSingleCard = (id) => {
    return coffeeCards.find((coffeeCard) => coffeeCard.id === id);
  };

  return { getAllCards, getSingleCard };
}
