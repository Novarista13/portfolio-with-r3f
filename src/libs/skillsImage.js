export default (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return "./skills/html.svg";
    case "css":
      return "./skills/css.svg";
    case "javascript":
      return "./skills/javascript.svg";
    case "bootstrap":
      return "./skills/bootstrap.svg";
    case "react":
      return "./skills/react.svg";
    case "threejs":
      return "./skills/threejs.svg";
    case "r3f":
      return "./skills/r3f.png";
    case "gsap":
      return "./skills/gsap.svg";
    case "materialui":
      return "./skills/materialui.svg";
    case "typescript":
      return "./skills/typescript.svg";
    case "next":
      return "./skills/next.svg";
    case "node":
      return "./skills/node.svg";
    case "tailwind":
      return "./skills/tailwind.svg";
    case "shadcnui":
      return "./skills/shadcn.png";
    case "flowbiteui":
      return "./skills/flowbite.png";
    case "next auth":
      return "./skills/next-auth.svg";
    case "prisma":
      return "./skills/prisma.svg";
    case "zod":
      return "./skills/zod.svg";
    case "zustand":
      return "./skills/zustand.png";
    case "axios":
      return "./skills/axios.png";
    default:
      break;
  }
};
