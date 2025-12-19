import type { Meta, StoryObj } from '@storybook/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { name: 'Jan', desktop: 186, mobile: 80, tablet: 50 },
  { name: 'Feb', desktop: 305, mobile: 200, tablet: 120 },
  { name: 'Mar', desktop: 237, mobile: 120, tablet: 80 },
  { name: 'Apr', desktop: 73, mobile: 190, tablet: 100 },
  { name: 'May', desktop: 209, mobile: 130, tablet: 90 },
  { name: 'Jun', desktop: 214, mobile: 140, tablet: 110 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  tablet: {
    label: 'Tablet',
    color: 'hsl(var(--chart-3))',
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Bar Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Bar charts are used to display categorical data with rectangular bars. They are ideal for comparing values across different categories.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    config: {
      control: { type: 'object' },
      description: 'Chart configuration for colors and labels',
    },
  },
  args: {
    config: chartConfig,
    className: 'w-full h-[300px]',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <Bar dataKey="mobile" fill="var(--color-mobile)" />
        <Bar dataKey="tablet" fill="var(--color-tablet)" />
      </BarChart>
    </ChartContainer>
  ),
};

export const SingleBar: Story = {
  render: (args) => (
    <ChartContainer {...args} config={{ desktop: { label: 'Sales', color: 'hsl(var(--chart-1))' } }}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </ChartContainer>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={80} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <Bar dataKey="mobile" fill="var(--color-mobile)" />
        <Bar dataKey="tablet" fill="var(--color-tablet)" />
      </BarChart>
    </ChartContainer>
  ),
};

export const Stacked: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" />
        <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" />
        <Bar dataKey="tablet" stackId="a" fill="var(--color-tablet)" />
      </BarChart>
    </ChartContainer>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar 
          dataKey="desktop" 
          fill="var(--color-desktop)" 
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="mobile" 
          fill="var(--color-mobile)" 
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="tablet" 
          fill="var(--color-tablet)" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  ),
};

export const Gradient: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <defs>
        <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1}/>
        </linearGradient>
        <linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1}/>
        </linearGradient>
        <linearGradient id="tabletGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-tablet)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="var(--color-tablet)" stopOpacity={0.1}/>
        </linearGradient>
      </defs>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="url(#desktopGradient)" />
        <Bar dataKey="mobile" fill="url(#mobileGradient)" />
        <Bar dataKey="tablet" fill="url(#tabletGradient)" />
      </BarChart>
    </ChartContainer>
  ),
};
