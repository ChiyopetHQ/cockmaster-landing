const Para = ({ txt }: { txt: string }) => {
    if (txt.endsWith(".jpg") || txt.endsWith(".png")) {
        return <img src={txt} alt="step body" />;
      } else {
        return <p>{txt}</p>;
      }
    };
export default Para;