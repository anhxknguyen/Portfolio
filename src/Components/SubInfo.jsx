const SubInfo = ({ sections, descs }) => {
  return (
    <div className="flex flex-col w-full ">
      {sections.map((section, i) => (
        <div className="w-full">
          <div className="flex flex-col justify-between w-full sm:flex-row ">
            <p
              key={i}
              className="text-sm text-start text-zinc-700 font-neueMed lg:text-start sm:text-lg"
            >
              {section}:
            </p>
            <p className="text-sm text-start text-zinc-700 font-neueMed lg:text-start sm:text-lg">
              {descs[i]}
            </p>
          </div>
          <hr className="my-2 border-zinc-700" />
        </div>
      ))}
    </div>
  );
};

export default SubInfo;
