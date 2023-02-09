import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  text: 'Primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: 'Large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Disabled',
};