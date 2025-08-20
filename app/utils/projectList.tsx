import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG, 
  MongoDBSVG,
  MongooseSVG, 
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG, 
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [ 
  {
    icon: <ShopApiSVG />,
    title: "Infinit Tech Solutions",
    subtitle: "Software Development Agency",
    technologies: [
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
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
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
          name: "Frame Motion",
          icon: (
            <ExpressSVG
              color="#000000"
              size={16}
            />
          ),
        },
        {
          name: "G-Sap",
          icon: (
            <ExpressSVG
              color="#000000"
              size={16}
            />
          ),
        },
        {
          name: "Threejs",
          icon: (
            <TailwindSVG
              color="#1572B6"
              size={16}
            />
          ),
        }, 
        {
          name: "TailwindCSS",
          icon: (
            <TailwindSVG
              color="#1572B6"
              size={16}
            />
          ),
        }, 
      ],
      description:
        "Developed a modern, responsive website for Infinit Tech Solutions. The website showcases their services, portfolio, and contact information, providing a professional online presence.",
      imgUrl: "/videos/symliqrd.webp",
      videoUrl: "/videos/infinit.webm",
      githubUrl: "https://github.com/ajay-dv8/syml ",
      websiteUrl: "https://infinitts.com",
    },

  {
    icon: <ShopApiSVG />,
    title: "Symliq Developers",
    subtitle: "Software Development Agency",
    technologies: [
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
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
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
          name: "Frame Motion",
          icon: (
            <ExpressSVG
              color="#000000"
              size={16}
            />
          ),
        },
        {
          name: "G-Sap",
          icon: (
            <ExpressSVG
              color="#000000"
              size={16}
            />
          ),
        },
        {
          name: "TailwindCSS",
          icon: (
            <TailwindSVG
              color="#1572B6"
              size={16}
            />
          ),
        }, 
      ],
      description:
        "Redesigned Symliq developers website to give itt a more modern and simple feel with easy and smooth navigation. ",
      imgUrl: "/videos/symliqrd.webp",
      videoUrl: "/videos/symliqrd.webm",
      githubUrl: "https://github.com/ajay-dv8/syml ",
      websiteUrl: "https://symliq.com",
    },


  {
    icon: <ShopApiSVG />,
    title: "Aniverse",
    subtitle: "Anime website landingpage",
    technologies: [
      {
        name: "Vite",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
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
          name: "TypeScript",
          icon: (
            <TypescriptSVG
              color="#3178C6"
              size={16}
            />
          ),
        },
        {
          name: "Gsap",
          icon: (
            <ExpressSVG
              color="#000000"
              size={16}
            />
          ),
        },
        {
          name: "CSS",
          icon: (
            <CSSSVG
              color="#1572B6"
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
      ],
      description:
        "An amazing animated landing page for an anime website, animated with gsap and to provide smooth and interactive transitions",
      imgUrl: "/videos/aniverse.png",
      videoUrl: "/videos/aniverseVid.webm",
      githubUrl: "https://github.com/ajay-dv8/aniverse",
      websiteUrl: "https://aniverse1.vercel.app/",
    },


// {
//   icon: <ShopApiSVG />,
//   title: "Symliq",
//   subtitle: "Software Development Agency",
//   technologies: [
//     {
//       name: "Next js",
//       icon: (
//         <NextSVG
//           color="#000"
//           size={16}
//         />
//       ),
//     },
//     {
//       name: "React",
//       icon: (
//         <ReactSVG
//           color="#61DAFB"
//           size={16}
//         />
//       ),
//     },
//       {
//         name: "TypeScript",
//         icon: (
//           <TypescriptSVG
//             color="#3178C6"
//             size={16}
//           />
//         ),
//       },
//       {
//         name: "Frame Motion",
//         icon: (
//           <ExpressSVG
//             color="#000000"
//             size={16}
//           />
//         ),
//       },
//       {
//         name: "Tailwind",
//         icon: (
//           <TailwindSVG
//             color="#1572B6"
//             size={16}
//           />
//         ),
//       }, 
//     ],
//     description:
//       "Symliq is a software development agency that provides most software development services for mobile, web enterprise and eCommerce softwares. ",
//     imgUrl: "/videos/symliq.png",
//     videoUrl: "/videos/symliq.webm",
//     githubUrl: "https://github.com/ajay-dv8/symliq-main",
//     websiteUrl: "https://symliqmain.vercel.app/",
//   },
  
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
      "A saas web application to help business owners communicate with their customers using AI, act as a help desk personnel and keep keep customers engaged, can be used for sales, advertising products and email marketing",
    imgUrl: "/videos/divesai.png",
    videoUrl: "/videos/divesvid.webm",
    githubUrl: "https://github.com/ajay-dv8/divesai",
    websiteUrl: "https://divesai.vercel.app/",
  },


  {
    icon: <ShadcnLandingSVG />,
    title: "Portfolio",
    subtitle: "Portfolio website",
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
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "Threejs",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
    description:
      "A simple 3D portfolio website, a single page portfolio with all relevant components.",
    imgUrl: "/videos/folio.png",
    videoUrl: "/videos/foliovid.webm",
    githubUrl: "https://github.com/ajay-dv8/3d-portfolio",
    websiteUrl: "https://ajayportfolio.vercel.app/",
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
        name: "Express",
        icon: (
          <ExpressSVG
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
  
  // {
  // icon: <ShopApiSVG />,
  // title: "Care Crew",
  // subtitle: "Home Service",
  // technologies: [
  //   {
  //     name: "Next js",
  //     icon: (
  //       <NextSVG
  //         color="#000"
  //         size={16}
  //       />
  //     ),
  //   },
  //   {
  //     name: "React",
  //     icon: (
  //       <ReactSVG
  //         color="#61DAFB"
  //         size={16}
  //       />
  //     ),
  //   },
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
  //       name: "GraphQL",
  //       icon: (
  //         <ExpressSVG
  //           color="#000000"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Tailwind",
  //       icon: (
  //         <TailwindSVG
  //           color="#1572B6"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "HyGraph",
  //       icon: (
  //         <MongooseSVG
  //           color="#880000"
  //           size={16}
  //         />
  //       ),
  //     },
      
  //   ],
  //   description:
  //     "A project that allows users to search categories and services to easly find and reach the services they are looking for .",
  //   imgUrl: "/videos/carecrew.png",
  //   videoUrl: "/videos/carecrew.png",
  //   githubUrl: "https://github.com/p-group50/care-crew",
  //   websiteUrl: "https://care-crew.vercel.app/",
  // },
  
];
