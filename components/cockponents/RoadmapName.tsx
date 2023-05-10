const RoadmapName = ({ title }: { title: string }) => {
    return (
      <h1 className="capitalize text-navy font-bold text-5xl md:text-5xl lg:text-7xl text-center md:text-left md:text-start">
        {title}
      </h1>
    );
  };
  
  export default RoadmapName;