import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "Dives AI",
    subtitle: "Landing page template",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "Next js",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      
      {
        name: "Shadcn",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "GPT-api",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
      {
        name: "Prisma",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },

      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "Neon / Postgresql",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
    description:
      "Project work for school, an online saas web application to help business owners communicate, act as a help desk personnel and keep keep customers engaged, can used for sales and advertising products and email marketing",
    imgUrl: "/videos/divesai.png",
    videoUrl: "/videos/divesvid.webm",
    githubUrl: "https://github.com/ajay-dv8/divesai",
    websiteUrl: "https://divesai.vercel.app/",
  },


  {
  icon: <ShadcnLandingSVG />,
    title: "Vinci AI",
    subtitle: "AI Image Generator",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Next js",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "Shadcn",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "GPT-api",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
      
    ],
    description:
      "Vinci-ai is an app that uses the openai-api to generate stunning images from text description",
    imgUrl: "/videos/vinci.png",
    videoUrl: "/videos/vinci.png",
    githubUrl: "https://github.com/ajay-dv8/vinci-ai",
    websiteUrl: "https://vinciai.vercel.app/",
  },

  // 
  
  // {
  // icon: <ShopApiSVG />,
  // title: "Shop API",
  // subtitle: "E-commerse back-end",
  // technologies: [
  //     {
  //       name: "JavaScript",
  //       icon: (
  //         <JavascriptSVG
  //         color="#F7DF1E"
  //         size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: (
  //         <TypescriptSVG
  //           color="#3178C6"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Express",
  //       icon: (
  //         <ExpressSVG
  //           color="#000000"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: (
  //         <MongoDBSVG
  //           color="#47A248"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Mongoose",
  //       icon: (
  //         <MongooseSVG
  //           color="#880000"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Swagger",
  //       icon: (
  //         <SwaggerSVG
  //           color="#85EA2D"
  //           size={16}
  //         />
  //       ),
  //     },
  //   ],
  //   description:
  //     "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with. Includes swagger docs.",
  //   imgUrl: "/videos/shop-api.webp",
  //   videoUrl: "",
  //   githubUrl: "https://github.com/leomirandaa/shop-API.git",
  //   websiteUrl: "NONE",
  // },
];
