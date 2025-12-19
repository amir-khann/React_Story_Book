import type { Meta, StoryObj } from '@storybook/react';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { month: 'Jan', desktop: 186, mobile: 80, revenue: 2400 },
  { month: 'Feb', desktop: 305, mobile: 200, revenue: 1398 },
  { month: 'Mar', desktop: 237, mobile: 120, revenue: 9800 },
  { month: 'Apr', desktop: 73, mobile: 190, revenue: 3908 },
  { month: 'May', desktop: 209, mobile: 130, revenue: 4800 },
  { month: 'Jun', desktop: 214, mobile: 140, revenue: 3800 },
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
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-3))',
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Composed Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composed charts combine multiple chart types in a single chart. They are ideal for showing different types of data with different scales.',
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

export const BarAndLine: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar yAxisId="left" dataKey="desktop" fill="var(--color-desktop)" />
        <Bar yAxisId="left" dataKey="mobile" fill="var(--color-mobile)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};

export const AreaAndLine: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area yAxisId="left" type="monotone" dataKey="desktop" stackId="1" stroke="var(--color-desktop)" fill="var(--color-desktop)" />
        <Area yAxisId="left" type="monotone" dataKey="mobile" stackId="1" stroke="var(--color-mobile)" fill="var(--color-mobile)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};

export const BarAreaLine: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar yAxisId="left" dataKey="desktop" fill="var(--color-desktop)" />
        <Area yAxisId="left" type="monotone" dataKey="mobile" stackId="1" stroke="var(--color-mobile)" fill="var(--color-mobile)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};

export const StackedBarAndLine: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar yAxisId="left" dataKey="desktop" stackId="a" fill="var(--color-desktop)" />
        <Bar yAxisId="left" dataKey="mobile" stackId="a" fill="var(--color-mobile)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};

export const GradientComposed: Story = {
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
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar yAxisId="left" dataKey="desktop" fill="url(#desktopGradient)" />
        <Area yAxisId="left" type="monotone" dataKey="mobile" stackId="1" stroke="var(--color-mobile)" fill="url(#mobileGradient)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};

export const CustomAxes: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" domain={[0, 400]} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 10000]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar yAxisId="left" dataKey="desktop" fill="var(--color-desktop)" />
        <Bar yAxisId="left" dataKey="mobile" fill="var(--color-mobile)" />
        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  ),
};
