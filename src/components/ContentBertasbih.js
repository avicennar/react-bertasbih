import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: '',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: '',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const ContentBertasbih = () => <UncontrolledCarousel items={items} />;
 

  export default ContentBertasbih;