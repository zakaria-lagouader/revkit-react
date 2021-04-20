import React from "react";
import Input, { InputProps } from "./Input";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = { placeholder: "Placeholder", label: "Label" };