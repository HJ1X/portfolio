import { Card, Image } from "@chakra-ui/react";

interface ImageCardProps {
  image?: string;
}

const ImageCard = ({ image }: ImageCardProps) => {
  if (!image) return;

  return (
    <Card borderRadius="2xl" overflow="hidden" shadow="2xl">
      <Image src={image} />
    </Card>
  );
};

export default ImageCard;
