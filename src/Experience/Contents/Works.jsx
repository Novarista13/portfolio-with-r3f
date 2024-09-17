import skillsImage from "../../libs/skillsImage";

const WorkContent = ({ work }) => {
  return (
    <div
      className="w-full h-full 
text-[25px] rounded-[50px] text-white bg-[#3E3232] px-12 flex flex-col"
    >
      {/* <div className="flex flex-row items-center gap-x-3 px-7 mt-7  overflow-scroll">
        <p className="mb-0 mr-2 inline">Tech Stack: </p>
        {work.techStacks.map((tech, id) => (
          <img key={id} src={skillsImage(tech)} alt={tech} width={50} height={50} />
        ))}
      </div> */}
      <p className=" rounded-2xl p-7 w-fit h-fit whitespace-pre-line">{work.description}</p>
      <div className="flex flex-row justify-center items-center gap-x-14 ">
        <a
          className="hover-highlight w-[195px] h-[47px]  text-center rounded-xl border-2 border-[#f6cfcf]"
          target="_blank"
          href={work.source}
        >
          Source Code
        </a>
        <a
          className="hover-highlight w-[195px] h-[47px]  text-center rounded-xl border-2 border-[#f6cfcf]"
          target="_blank"
          href={work.demo}
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export { WorkContent };
