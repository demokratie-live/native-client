import React from 'react';
import { Pagination } from 'react-native-snap-carousel';
import { theme } from '../../styles/theme';

export interface PaginationProps {
  length: number;
  active?: number;
}

export const CarouselPagination: React.FC<PaginationProps> = ({ length, active = 0 }) => {
  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={active}
      containerStyle={{
        paddingTop: 10,
        paddingBottom: 18,
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.text.colored,
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.8}
    />
  );
};
