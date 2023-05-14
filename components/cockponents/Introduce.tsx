const Introduce = ({ title }: { title: string }) => {
    return (
      <h1 className="capitalize text-navy font-bold text-3xl md:text-4xl lg:text-4xl text-center md:text-left mb-2 text-sky-500">
        {title}
      </h1>
    );
  };
  
  export default Introduce;