import { makeElement } from "../makeElement";
import "./menu.css";
function Menu() {
  //Main Container
  const divContainer = document.getElementById("content");
  divContainer.innerHTML = " ";

  const mainMenuContainer = makeElement("div", [{ id: "main-menu-container" }]);

  //Heading Container
  const h2tag = makeElement("h2", [], ["Restaurant Menu"]);
  const header = makeElement("div", [{ id: "menu-header" }], [h2tag]);

  const menus = [
    //Menu1
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/00ae34b9-dbf6-4788-bb79-b42513d5b474_volcanoHomePeppyPaneer.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Cheese Volcano Peppy Paneer"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Centre loaded with molten Cheese & topped with peppy Paneer, Capsicum & Red Paprika *Contains non-edible container under the Pizza.",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
    //Menu2
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/91d8018d-f353-4358-9226-a31f55d5b8b2_FullSizeFarmhouse.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Cheese Volcano Farmhouse"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Centre loaded with molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom. *Contains non-edible container under the Pizza.",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
    //Menu3
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/08ec2d51-9032-4030-a7a1-e1c9d67ae19b_FullsizeFarmhouseCB.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Farmhouse"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Delightful combination of onion, capsicum, tomato & grilled mushrooms",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
    //Menu4
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/beec8145-bdd9-46f5-ba99-945d81b3488a_FullsizeDoubleSpiceChickenCB.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Spiced Double Chicken Pizza"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Molten Cheese indulgence with combination of Pepper Barbecue Chicken & Peri Peri Chicken for Chicken lovers.",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
    //Menu5
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d5b5a2d5-55ad-4414-9c6b-5f736b399075_FullsizeChickenFiestaCB.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Chicken Fiesta"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Molten Cheese indulgence with grilled chicken rashers, peri-peri chicken, onion and capsicum",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
    //Menu6
    {
      menuImg: {
        tag: "img",
        attribute: [
          {
            class: "menuImg",
            src: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d1a33287-fa34-4506-af76-4fc1e22b841c_FullsizeFreshveggieCB.jpg?ver=V0.0.1",
          },
        ],
        children: [],
      },
      menuTitle: {
        tag: "h4",
        attribute: [
          {
            class: "menuTitle",
          },
        ],
        children: ["Fresh Veggie"],
      },
      menuDescription: {
        tag: "p",
        attribute: [
          {
            class: "menuDescription",
          },
        ],
        children: [
          "Molten Cheese indulgence with combination of onion & capsicum",
        ],
      },
      menuBuyButton: {
        tag: "button",
        attribute: [{ class: "BuyButton" }],
        children: ["Add to Cart"],
      },
    },
  ];

  const menuItems = [];

  menus.forEach((menu) => {
    let menuImg = makeElement(
      menu.menuImg.tag,
      menu.menuImg.attribute,
      menu.menuImg.children
    );
    let menuTitle = makeElement(
      menu.menuTitle.tag,
      menu.menuTitle.attribute,
      menu.menuTitle.children
    );
    let menuDescription = makeElement(
      menu.menuDescription.tag,
      menu.menuDescription.attribute,
      menu.menuDescription.children
    );
    let menuBuyButton = makeElement(
      menu.menuBuyButton.tag,
      menu.menuBuyButton.attribute,
      menu.menuBuyButton.children
    );
    menuItems.push(
      makeElement(
        "div",
        [{ class: "menu" }],
        [menuImg, menuTitle, menuDescription, menuBuyButton]
      )
    );
  });

  const menuContainer = makeElement(
    "div",
    [{ id: "menuContainer" }],
    menuItems
  );
  mainMenuContainer.append(header, menuContainer);
  divContainer.appendChild(mainMenuContainer);
}
export { Menu };
