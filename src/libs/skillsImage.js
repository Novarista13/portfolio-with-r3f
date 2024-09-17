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
    case "materialui":
      return "./skills/materialui.svg";
    case "git":
      return "./skills/git.svg";
    case "canva":
      return "./skills/canva.svg";
    case "typescript":
      return "./skills/next.svg";
    case "next":
      return "./skills/node.svg";
    case "node":
      return "./skills/tailwind.svg";
    case "tailwind":
      return "./skills/github.svg";
    case "github":
      return "./skills/typescript.svg";
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
    case "axios":
      return "./skills/axios.png";
    default:
      break;
  }
};
