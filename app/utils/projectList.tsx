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
  
  {
  icon: <ShopApiSVG />,
  title: "Care Crew",
  subtitle: "Home Service",
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
        name: "GraphQL",
        icon: (
          <ExpressSVG
            color="#000000"
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
        name: "HyGraph",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      },
      
    ],
    description:
      "A project that allows users to search categories and services to easly find and reach the services they are looking for .",
    imgUrl: "/videos/carecrew.png",
    videoUrl: "/videos/carecrew.png",
    githubUrl: "https://github.com/p-group50/care-crew",
    websiteUrl: "https://care-crew.vercel.app/",
  },
];
