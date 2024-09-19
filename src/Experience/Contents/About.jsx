import Text from "./TypeText";

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
        <Text />
        {/* <a
          className="hover-highlight w-[195px] h-[47px] mt-5 text-[25px] text-center rounded-xl border-2 border-[#f6cfcf]"
          href="/maythithtun.pdf"
          download="MayThitHtun.pdf"
        >
          Download CV
        </a> */}
      </div>
      <img className="hero-gif basis-96 w-96 h-96" src={"./cha.gif"} alt="hero" />
    </div>
  );
};

const About2Content = () => {
  return (
    <div className="w-full h-full rounded-[50px] text-white bg-[#3E3232] p-12 ">
      <p className="hover-highlight text-[28px] border-2 border-[#f6cfcf] rounded-2xl p-7 w-fit h-fit">
        Hello! I’m May Thit Htun, a Front-end React Developer with a passion for 3D development.
        <br /> Proficient in Three.js, React Three Fiber, and Blender, I love bringing creative
        ideas to life through interactive and immersive web 3D experiences.
        <br /> <br /> I’m currently seeking new opportunities in web development and am open to
        remote work with flexible hours. My goal is to push the boundaries of web development and
        deliver exceptional user experiences.
        <br /> <br /> Let’s connect and create something extraordinary together!
      </p>
    </div>
  );
};

export { About1Content, About2Content };
