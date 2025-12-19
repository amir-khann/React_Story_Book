import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const chartConfig = {
  A: {
    label: 'Student A',
    color: 'hsl(var(--chart-1))',
  },
  B: {
    label: 'Student B',
    color: 'hsl(var(--chart-2))',
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Radar Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radar charts are used to display multivariate data in a two-dimensional chart. They are ideal for showing performance across multiple categories.',
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
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.6}
        />
        <Radar
          name="B"
          dataKey="B"
          stroke="var(--color-B)"
          fill="var(--color-B)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  ),
};

export const SingleRadar: Story = {
  render: (args) => (
    <ChartContainer {...args} config={{ A: { label: 'Performance', color: 'hsl(var(--chart-1))' } }}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Radar
          name="Performance"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  ),
};

export const NoFill: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="none"
          strokeWidth={2}
        />
        <Radar
          name="B"
          dataKey="B"
          stroke="var(--color-B)"
          fill="none"
          strokeWidth={2}
        />
      </RadarChart>
    </ChartContainer>
  ),
};

export const Dotted: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.3}
          strokeDasharray="5 5"
        />
        <Radar
          name="B"
          dataKey="B"
          stroke="var(--color-B)"
          fill="var(--color-B)"
          fillOpacity={0.3}
          strokeDasharray="10 5"
        />
      </RadarChart>
    </ChartContainer>
  ),
};

export const CustomRadius: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 150]} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.6}
        />
        <Radar
          name="B"
          dataKey="B"
          stroke="var(--color-B)"
          fill="var(--color-B)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  ),
};

export const Small: Story = {
  render: (args) => (
    <ChartContainer {...args} className="w-full h-[200px]">
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Radar
          name="A"
          dataKey="A"
          stroke="var(--color-A)"
          fill="var(--color-A)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  ),
};
