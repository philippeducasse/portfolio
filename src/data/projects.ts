export interface Project {
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  githubLink?: string;
  link: string;
  tools: Tool[];
}

 interface Tool { name: string; image: string, mainTool?:boolean }

export const projects: Project[] = [
  {
    name: "Clapp",
    shortDescription:
      "I've always hated sending out emails trying to get gigs. So I built an entire app to help me with the process.",
    description:
      "Clapp helps freelance performance manage and enhance their careers by streamlining the application process.",
    image: "/img/clapp.png",
    link: "https://clap.ovh",
    tools: [
      { name: "Next.js", image: "/img/logos/next.svg", mainTool: true },
      { name: "Django", image: "/img/logos/django.svg", mainTool: true },
      { name: "Mistral", image: "/img/logos/mistral.png", mainTool: true },
      {name: "Docker", image: "/img/logos/docker.svg"}
    ],
  },
  {
    name: "Zirkusmond",
    shortDescription:
      "I'm the core maintainer of the Zirkusmond website, a thriving circus located in the heart of berlin.",
    description:
      "Zirkusmond is one of Berlin's top underground performance venues. Handles about 20.000 ticket sales a year.",
    image: "/img/zm.png",
    link: "https://zirkusmond.de",
    tools: [
      { name: "Vue", image: "/img/logos/vue.svg", mainTool: true },
      { name: "Django", image: "/img/logos/django.svg", mainTool: true },
      { name: "Stripe", image: "/img/logos/stripe.svg", mainTool: true },
      {name: "Docker", image: "/img/logos/docker.svg"}

    ],
  },
  {
    name: "philippeducasse.com",
    shortDescription: "Gotta plug my circus work somewhere.",
    description:
      "My circus portfolio. I also added an entire Dagster pipeline leveraging some HuggingFace models. Overkill? Absolutely.",
    image: "/img/pd.png",
    link: "https://philippeducasse.com",
    tools: [
      { name: "Nuxt", image: "/img/logos/nuxt.svg" },
      { name: "FastAPI", image: "/img/logos/fastapi.svg", mainTool: true },
      { name: "Hugging Face", image: "/img/logos/hf.svg", mainTool: true },
      { name: "Dagster", image: "/img/logos/dagster.svg", mainTool: true },
      {name: "Docker", image: "/img/logos/docker.svg"}
    ],
  },
];
