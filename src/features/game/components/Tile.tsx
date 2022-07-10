import React, { useEffect, useState } from 'react';
import { TileColor, TileNumber } from '@/types';

type Props = {
  color: TileColor;
  number: TileNumber;
};

export const Tile: React.FC<Props> = ({ color, number }: Props) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(
        `../../../assets/images/tiles/${color}${number}.gif`
      );
      setImage(response.default);
    };

    fetchImage();
  }, []);

  return <img src={image} />;
};
