import skillsImage from "../../libs/skillsImage";

const WorkContent = ({ work }) => {
  return (
    <div
      className="w-full h-full 
text-[25px] rounded-[50px] text-white bg-[#3E3232] px-12 py-10 flex flex-col"
    >
      <div className="flex flex-row items-center gap-x-4 px-7 min-h-10 overflow-x-scroll">
        <p className="mr-2 inline">Tech Stack: </p>
        {work.techStacks.map((tech, id) => (
          <img key={id} src={skillsImage(tech)} alt={tech} width={40} height={40} />
        ))}
      </div>
      <p className="max-h-[450px] overflow-y-scroll rounded-2xl p-7 py-4 w-fit h-fit whitespace-pre-line">
        {work.description}
      </p>
      <div className="flex flex-row justify-center items-center gap-x-14 mt-auto">
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
