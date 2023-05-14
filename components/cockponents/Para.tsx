const Para = ({ txt, className = "" }: { txt: string; className?: string }) => {
  if (txt.endsWith(".jpg") || txt.endsWith(".png")) {
    return <img src={txt} alt="step body" />;
  } else {
    return <p className={className}>{txt}</p>;
  }
};
export default Para;
