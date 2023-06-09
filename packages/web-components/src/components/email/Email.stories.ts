import { html } from 'lit-html';
import './Email';

export default {
  title: 'Email',
  component: 'dc-email',
  tags: ['autodocs'],
  argTypes: {
    user: {
        control: 'text',
        defaultValue: '',
        description: 'The user part of the email address, reversed',
    },
    domain: {
        control: 'text',
        defaultValue: '',
        description: 'The domain part of the email address, reversed',
    },
    mailto: {
        control: 'boolean',
        defaultValue: true,
        description: 'Whether to render the email address as a mailto link',
    }
  }
};

export const Default = {
  args: {
    user: 'test'.split("").reverse().join(""),
    domain: 'example.com'.split("").reverse().join(""),
    mailto: true,
  }
};

export const Slot = {
  render: ({user, domain, mailto}) => html`<dc-email user=${user} domain=${domain} mailto=${mailto}>Email</dc-email>`,
  args: {
    user: 'test'.split("").reverse().join(""),
    domain: 'example.com'.split("").reverse().join(""),
    mailto: true,
  }
};
