interface FeaturedCardProps {
  id: number;
  image?: string;
  title: string;
  content: string;
  author: string;
  installs: number;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  id,
  image,
  title,
  content,
  author,
  installs,
}) => {
  return (
    <div>
      <img src={image} alt="image" />
      <h2>{title}</h2>
      <div className="featured-card-author">
        <p>{author}</p>
        <p>{installs} Installs</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default FeaturedCard;
