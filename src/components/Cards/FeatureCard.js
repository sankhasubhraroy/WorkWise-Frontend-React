const FeatureCard = ({ image, heading, body }) => {
  return (
    <div className="w-80 h-96 p-4 flex flex-col justify-start items-center gap-4">
      <img src={image} alt="" />

      <h1 className="font-secondary font-semibold text-2xl">{heading}</h1>

      <p className="font-secondary font-light text-center">{body}</p>
    </div>
  );
};

export default FeatureCard;
