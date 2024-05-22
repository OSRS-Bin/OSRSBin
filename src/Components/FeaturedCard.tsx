interface FeaturedCardProps {
  id: number;
  image?: string;
  title: string;
  content: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  id,
  image,
  title,
  content,
}) => {
  // Your component logic here

  return (
    <div>
      <img src={image} alt="image" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FeaturedCard;
