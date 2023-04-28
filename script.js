// Items 
const menu = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        category: "breakfast",
        price:200,
        img: "./Images/buttermilk-pancakes.jpg",
        desc: `Light, soft and fluffy with the perfect balance of sweet, salty and tang; you may not even want them smothered in syrup.`,
    },
    {
        id: 2,
        title: "Diner double",
        category: "lunch",
        price: 850,
        img: "./Images/Diner-Double.jpeg",
        desc: `Two ¼ pound patties on a potato roll with house pickles, spinach, tomatoes, American cheese, onion, and special sauce.`,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 500,
      img: "./Images/Strwaberry-Smoothie.jpg",
      desc: `A milkshake is a cold drink made by mixing milk with a flavouring or fruit, and sometimes ice cream.`  
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 1000,
        img: "./Images/country-delight.jpeg",
        desc: `Here food is prepared with love. Come explore and experience the joys of cooking Halal Indian & International recipes.`
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 1500,
        img: "./Images/Egg-attack.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 200 ,
        img: "./Images/Orea-dream.jpeg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 900,
        img: "./Images/Bacon-overflow.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
    {
        id: 8,
        title: "American Classic",
        category: "lunch" ,
        price: 1800,
        img: "./Images/American-delight.jpeg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
    {
        id: 9,
        title: "Qurantine Buddy",
        category: "shakes",
        price: 600,
        img:"./Images/Quarantine-buddy.jpeg" ,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
    {
        id: 10,
        title: "Steak Dinner",
        category: "dinner",
        price: 2400,
        img: "./Images/Steak-dinner.jpeg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    },
]

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


// load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
      
});

// filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === "all") {
            displayMenuItems(menu);
        }
        else {
            displayMenuItems(menuCategory);
        }
    });
});



    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function(item) {
            return ` <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">&#8377; ${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
            </div>
        </article>`; 
        });
    
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    }
    
    // Menu Buttons
    function displayMenuButtons() {
        const categories = menu.reduce(
          function (values, item) {
            if (!values.includes(item.category)) {
              values.push(item.category);
            }
            return values;
          },
          ["all"]
        );
        const categoryBtns = categories
          .map(function (category) {
            return `<button class="filter-btn" type="button" data-id=${category}>
            ${category}
            </button>`;
          })
          .join("");
        container.innerHTML = categoryBtns;
        const filterBtns = container.querySelectorAll(".filter-btn");
        // filter items
        filterBtns.forEach(function (btn) {
          btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
              // console.log(menuItem.category);
              if (menuItem.category === category) {
                return menuItem;
              }
            });
            // console.log(menuCategory);
            if (category === "all") {
              displayMenuItems(menu);
            } else {
              displayMenuItems(menuCategory);
            }
          });
        });
      }
