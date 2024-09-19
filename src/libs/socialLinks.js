export default (link) => {
  const linkID = link.toLowerCase();
  switch (linkID) {
    case "linkedin":
      return "https://www.linkedin.com/in/may-thit-htun-133162273/";
    case "github":
      return "https://github.com/Novarista13";
    case "mail":
      return "mailto:maythit1345@example.com";
    case "discord":
      return "https://discord.com/invite/EHxpQcJb";

    default:
      break;
  }
};
