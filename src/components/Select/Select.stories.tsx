import React from "react";
import Select, { SelectProps } from "./Select";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Select',
    component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Simple = Template.bind({});
Simple.args = { placeholder: "Placeholder", label: "Label", onChange: (e) => console.log(e) };