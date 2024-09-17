import skillsData from "../../libs/skillsData";
import Text from "./TypeText";
import Marquee from "react-fast-marquee";

const About1Content = () => {
  return (
    <div className="w-full h-full rounded-[50px] text-white bg-[#3E3232] py-20 px-5 flex flex-row">
      <div className="flex flex-col gap-y-5 text-[40px] justify-center basis-2/3 ps-12">
        <p>
          Hi, There <span className="wave">👋🏻</span>
        </p>
        <div>
          I'M <span className="hover-highlight text-[#f6cfcf]">MAY THIT HTUN</span>
        </div>
        {/* <Text /> */}
        <a
          className="hover-highlight w-[195px] h-[47px] mt-5 text-[25px] text-center rounded-xl border-2 border-[#f6cfcf]"
          href="/maythithtun.pdf"
          download="MayThitHtun.pdf"
        >
          Download CV
        </a>
      </div>
      {/* <img className="hero-gif basis-96 w-96 h-96" src={"./cha2.gif"} alt="hero" /> */}
    </div>
  );
};

const About2Content = () => {
  return (
    <div className="w-full h-full rounded-[50px] text-white bg-[#3E3232] p-12 ">
      <p className="hover-highlight text-[28px] border-2 border-[#f6cfcf] rounded-2xl p-7 w-fit h-fit">
        Hello! I'm May Thit Htun, a passionate Front-end React Developer based in Yangon, Myanmar.
        <br />
        <br />
        With a strong foundation in JavaScript, React, HTML, and CSS, I thrive on creating dynamic
        and user-friendly web applications. I'm currently seeking new opportunities in web
        development, and I'm open to remote work with flexible hours. My goal is to bring innovative
        ideas to life through code and deliver exceptional user experiences.
        <br />
        <br />
        Let's connect and explore how we can collaborate to create something extraordinary!
      </p>
    </div>
  );
};

export { About1Content, About2Content };

// style={{
//   display: "inline",
//   borderImageRepeat: "stretch",
//   borderImageSlice: "0 fill",
//   borderImageSource:
//     "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg)",
//   borderImageWidth: "calc(100% - 6px) 0 0",
//   borderImageOutset: "3px",
// }}
