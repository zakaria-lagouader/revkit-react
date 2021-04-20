import React from "react";
import Textarea, { TextareaProps } from "./Textarea";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Textarea',
    component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Simple = Template.bind({});
Simple.args = { placeholder: "Placeholder", label: "Label" };