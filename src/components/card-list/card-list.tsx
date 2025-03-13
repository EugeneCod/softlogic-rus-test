import './card-list.scss';
import { Card } from '..';
import Image1 from '@/assets/images/card-image__1.jfif';
import Image2 from '@/assets/images/card-image__2.jfif';
import type { CardProps } from '../card/card';

const cards: CardProps[] = [
  {
    title: 'Пролет №1',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 12,
  },
  {
    title: 'Пролет №2',
    fileType: 'Видео',
    date: '23.01.2023',
    tags: ['forest', 'spans'],
    imageSrc: Image2,
    numberOfFiles: 2,
  },
  {
    title: 'Пролет №3',
    fileType: 'Видео',
    date: '23.01.2023',
    tags: ['forest', 'spans'],
    imageSrc: Image2,
    numberOfFiles: 3,
  },
  {
    title: 'Пролет №4',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 7,
  },
  {
    title: 'Пролет №5',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 8,
  },
  {
    title: 'Пролет №6',
    fileType: 'Видео',
    date: '23.01.2023',
    tags: ['forest', 'spans'],
    imageSrc: Image2,
    numberOfFiles: 22,
  },
  {
    title: 'Пролет №7',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 45,
  },
  {
    title: 'Пролет №8',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 1,
  },
  {
    title: 'Пролет №9',
    fileType: 'Видео',
    date: '23.01.2023',
    tags: ['forest', 'spans'],
    imageSrc: Image2,
    numberOfFiles: 9,
  },
  {
    title: 'Пролет №10',
    fileType: 'Фото',
    date: '23.01.2023',
    tags: ['forest', 'frames'],
    imageSrc: Image1,
    numberOfFiles: 17,
  },
];

export const CardList = (props: PropsWithClassName) => {
  const { className } = props;
  return (
    <ul className={`card-list ${className}`}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          fileType={card.fileType}
          date={card.date}
          tags={card.tags}
          imageSrc={card.imageSrc}
          numberOfFiles={card.numberOfFiles}
        />
      ))}
    </ul>
  );
};
