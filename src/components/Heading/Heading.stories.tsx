import React from "react";
import Heading, { HeadingProps } from "./Heading";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Heading',
    component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} >Heding 1</Heading>;

export const Simple = Template.bind({});
Simple.args = { size: "x3", color: "primary" };