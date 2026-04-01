export interface Project {
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  githubLink?: string;
  link: string;
  tools: { name: string; image: string }[];
}

export const projects: Project[] = [
  {
    name: "Clapp",
    shortDescription:
      "I've always hated sending out emails trying to get performances. So I built an entire app to help me with the process.",
    description:
      "Clapp helps freelance performance manage and enhance their careers by streamlining the application process.",
    image: "/img/fletnix.png",
    link: "https://clap.ovh",
    tools: [
      { name: "Next.js", image: "/img/logos/next.svg" },
      { name: "Django", image: "/img/logos/django.svg" },
      { name: "Mistral", image: "/img/logos/mistral.png" },
    ],
  },
  {
    name: "Zirkusmond",
    shortDescription:
      "I'm the core maintainer of the Zirkusmond website, a thriving circus located in the heart of berlin.",
    description:
      "Zirkusmond is one of Berlin's top underground performance venues. Handles about 20.000 ticket sales a year.",
    image: "/img/fletnix.png",
    link: "https://zirkusmond.de",
    tools: [
      { name: "Vue", image: "/img/logos/vue.svg" },
      { name: "Django", image: "/img/logos/django.svg" },
      { name: "Stripe", image: "/img/logos/stripe.svg" },
    ],
  },
  {
    name: "philippeducasse.com",
    shortDescription: "Gotta plug my circus work somewhere.",
    description:
      "My circus portfolio. I also added an entire Dagster pipeline leveraging some HuggingFace models. Overkill? Absolutely.",
    image: "/img/fletnix.png",
    link: "https://philippeducasse.com",
    tools: [
      { name: "Nuxt", image: "/img/logos/nuxt.svg" },
      { name: "FastAPI", image: "/img/logos/fastapi.svg" },
      { name: "Hugging Face", image: "/img/logos/hf.svg" },
      { name: "Dagster", image: "/img/logos/dagster.svg" },
    ],
  },
];
