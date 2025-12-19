import type { Meta, StoryObj } from '@storybook/react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { x: 100, y: 200, z: 200, name: 'A' },
  { x: 120, y: 100, z: 260, name: 'B' },
  { x: 170, y: 300, z: 400, name: 'C' },
  { x: 140, y: 250, z: 280, name: 'D' },
  { x: 150, y: 400, z: 500, name: 'E' },
  { x: 110, y: 280, z: 200, name: 'F' },
  { x: 200, y: 150, z: 300, name: 'G' },
  { x: 180, y: 350, z: 450, name: 'H' },
];

const chartConfig = {
  x: {
    label: 'X Value',
    color: 'hsl(var(--chart-1))',
  },
  y: {
    label: 'Y Value',
    color: 'hsl(var(--chart-2))',
  },
  z: {
    label: 'Z Value',
    color: 'hsl(var(--chart-3))',
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Scatter Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Scatter charts are used to display the relationship between two numerical variables. They are ideal for showing correlations and patterns in data.',
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
      <ScatterChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Scatter dataKey="y" fill="var(--color-y)" />
      </ScatterChart>
    </ChartContainer>
  ),
};

export const WithSize: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ScatterChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Scatter 
          dataKey="y" 
          fill="var(--color-y)"
          r={6}
        />
      </ScatterChart>
    </ChartContainer>
  ),
};

export const VariableSize: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ScatterChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Scatter 
          dataKey="y" 
          fill="var(--color-y)"
          r={(entry) => Math.sqrt(entry.z) / 10}
        />
      </ScatterChart>
    </ChartContainer>
  ),
};

export const MultipleSeries: Story = {
  render: (args) => {
    const data1 = data.slice(0, 4).map(item => ({ ...item, series: 'Series 1' }));
    const data2 = data.slice(4).map(item => ({ ...item, series: 'Series 2' }));
    
    return (
      <ChartContainer {...args}>
        <ScatterChart data={[...data1, ...data2]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="X" />
          <YAxis dataKey="y" name="Y" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Scatter 
            data={data1}
            dataKey="y" 
            fill="var(--color-y)"
            r={6}
          />
          <Scatter 
            data={data2}
            dataKey="y" 
            fill="var(--color-z)"
            r={6}
          />
        </ScatterChart>
      </ChartContainer>
    );
  },
};

export const CustomShapes: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ScatterChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Scatter 
          dataKey="y" 
          fill="var(--color-y)"
          r={8}
          shape="square"
        />
      </ScatterChart>
    </ChartContainer>
  ),
};

export const WithLabels: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <ScatterChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Scatter 
          dataKey="y" 
          fill="var(--color-y)"
          r={6}
          label={{ dataKey: 'name', position: 'top' }}
        />
      </ScatterChart>
    </ChartContainer>
  ),
};
