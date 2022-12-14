import type { Meta, Story } from '@storybook/react';

import MusicCard from '.';
import { Props } from './types';

export default {
  component: MusicCard,
  title: 'Core/MusicCard',
} as Meta;

const Template: Story<Props> = (args) => <MusicCard {...args}></MusicCard>;

export const Default = Template.bind({});
Default.args = {
  songData: {
    audio: { url: 'https://d2s139ebbsksc4.cloudfront.net/PartingGlass.mp3' },
    author: { name: 'David Harrington' },
    description:
      'Film a risk among he get. Red defense seem let bring. Business probably tough practice center whatever.',
    genre: 'FREE_TEKNO',
    id: 6,
    image:
      'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    name: 'Tammie Gonzalez',
  },
};
