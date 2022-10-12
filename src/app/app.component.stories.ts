import { AppComponent } from './app.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: "Atoms/Test",
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;



const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
  template: `
    <app-root></app-root>
  `,
});

export const Default = Template.bind({});

Default.args = {
};
