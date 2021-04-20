import React from "react";
import Alert, { AlertProps } from "./Alert";

import { Meta, Story } from '@storybook/react';

export default {
    title: 'Components/Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Light = Template.bind({});
Light.args = { text: "A bright alert flash for dark backgrounds, which never lose the contrast.", variant: "light" };