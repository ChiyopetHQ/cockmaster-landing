interface ITextBullet {
  body: string[];
  className: string;
}

const TextBullet = (props: ITextBullet) => {
  return (
    <>
      {props.body.map((text) =>
        text.endsWith(".jpg") || text.endsWith(".png") ? (
          <img src={text} alt="Image" />
        ) : (
          <li className={props.className}>{text}</li>
        )
      )}
    </>
  );
};

export default TextBullet;
