import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
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
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Area Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Area charts are used to display data as filled areas. They are ideal for showing trends and cumulative totals over time.',
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
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stackId="1"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke="var(--color-mobile)"
          fill="var(--color-mobile)"
        />
      </AreaChart>
    </ChartContainer>
  ),
};

export const SingleArea: Story = {
  render: (args) => (
    <ChartContainer {...args} config={{ desktop: { label: 'Users', color: 'hsl(var(--chart-1))' } }}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
        />
      </AreaChart>
    </ChartContainer>
  ),
};

export const Stacked: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stackId="1"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke="var(--color-mobile)"
          fill="var(--color-mobile)"
        />
      </AreaChart>
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
      </defs>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stackId="1"
          stroke="var(--color-desktop)"
          fill="url(#desktopGradient)"
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke="var(--color-mobile)"
          fill="url(#mobileGradient)"
        />
      </AreaChart>
    </ChartContainer>
  ),
};

export const Smooth: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stroke="var(--color-mobile)"
          fill="var(--color-mobile)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  ),
};

export const NoGrid: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="desktop"
          stackId="1"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke="var(--color-mobile)"
          fill="var(--color-mobile)"
        />
      </AreaChart>
    </ChartContainer>
  ),
};
