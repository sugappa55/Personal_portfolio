import TodoImage from "../assets/png/todo-app.png"
import ZaraImage from "../assets/png/zara.png"

export const projectsData = [
  {
    id: 1,
    projectName: "Crypto Tracking App",
    projectDesc: [
      `A cryptocurrency  tracker is a website,that allows you to keep track of how the value of coins are changing.`,
      [
        "Google authentication with help of firebase",
        "Responsive Web pages",
        "Major bug fixes",
      ],
    ],
    tags: ["React", "materialui", "firebase"],
    code: "https://github.com/sugappa55/Crypto-Tracker",
    demo: "https://crypto-tracker-vert.vercel.app/",
    image:
      "https://i.postimg.cc/Hsvmgr2S/Screenshot-155.png",
  },
  {
    id: 2,
    projectName: "Netflix frontend Clone",
    projectDesc: [
      "Mini clone of netflix.com with user authentication and add to watchlist functionalities",
      ["Responsive webpages", "Fully functional cart", "Major Bug fixes"],
    ],
    tags: ["React", "tailwind", "firebase"],
    code: "https://github.com/sugappa55/Netflix-Clone",
    demo: "https://netflix-react-f90d2.web.app/",
    image:"https://i.postimg.cc/SKNczt8Q/Screenshot-153.png"
  },
  {
    id: 3,
    projectName: "Home to go clone",
    projectDesc: [
      "Clone of Hometogo.com Website which provides rental rooms for Vacational Purposes.",
      [
        "Built details page",
        "Bulit the backend api",
        "Added functionality to cart",
      ],
    ],
    tags: ["mongodb", "node js", "express"],
    code: "https://github.com/deepakdk0808/home2go-FRONTENDapi",
    demo: "https://home2go-frontend-api.vercel.app/",
    image:"https://i.postimg.cc/rFNBVK96/hometogo.png"
  },
  {
    id: 4,
    projectName: "Zara.com clone",
    projectDesc: [
      "Clone of Zara.com ,An e-commerce website to shop clothes for men,women and kids",
      [
        "Built Cart page",
        "Bulit athletics products section",
      ],
    ],
    tags: ["html", "css", "javascript"],
    code: "https://github.com/yashrajillusion/zara",
    demo: "https://zara-vert.vercel.app/",
    image:ZaraImage
  },
   {
    id: 5,
    projectName: "Todo App",
    projectDesc: [
      "A Todo Web App with CRUD methods implemented",
      [
        "Implemented CRUD methods",
        "Lazy loading components",
        "Responsive web pages",
      ],
    ],
    tags: ["React", "tailwind", "javascript"],
    code: "https://github.com/yashrajillusion/zara",
    demo: "https://todo-app-orcin-kappa-30.vercel.app/",
    image:TodoImage
  },

];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
