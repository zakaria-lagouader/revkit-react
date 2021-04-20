import React from "react";
import Paragraph, { ParagraphProps } from "./Paragraph";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Paragraph',
    component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} >Heding 1</Paragraph>;

export const Simple = Template.bind({});
Simple.args = { size: "x1", color: "primary" };