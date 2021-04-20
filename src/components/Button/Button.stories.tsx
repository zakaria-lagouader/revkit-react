import React from "react";
import Button, { ButtonProps } from "./Button";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Button</Button>;

export const Primary = Template.bind({});
Primary.args = { variant: "primary", };

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary" };

export const Outlined = Template.bind({});
Outlined.args = { variant: "outlined" };

export const Disabled = Template.bind({});
Disabled.args = { variant: "primary", disabled: true };

