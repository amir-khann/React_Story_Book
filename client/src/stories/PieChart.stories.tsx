import type { Meta, StoryObj } from '@storybook/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '../components/ui/chart';

const data = [
  { name: 'Desktop', value: 186, fill: 'hsl(var(--chart-1))' },
  { name: 'Mobile', value: 200, fill: 'hsl(var(--chart-2))' },
  { name: 'Tablet', value: 120, fill: 'hsl(var(--chart-3))' },
  { name: 'Other', value: 50, fill: 'hsl(var(--chart-4))' },
];

const chartConfig = {
  Desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  Mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  Tablet: {
    label: 'Tablet',
    color: 'hsl(var(--chart-3))',
  },
  Other: {
    label: 'Other',
    color: 'hsl(var(--chart-4))',
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Data Display/Pie Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pie charts are used to display data as slices of a pie. They are ideal for showing proportions and percentages of a whole.',
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
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
};

export const Donut: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
};

export const FullPie: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
};

export const WithLabels: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
};

export const CustomColors: Story = {
  render: (args) => {
    const customData = [
      { name: 'Desktop', value: 186, fill: '#8884d8' },
      { name: 'Mobile', value: 200, fill: '#82ca9d' },
      { name: 'Tablet', value: 120, fill: '#ffc658' },
      { name: 'Other', value: 50, fill: '#ff7300' },
    ];
    
    return (
      <ChartContainer {...args}>
        <PieChart>
          <Pie
            data={customData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
          >
            {customData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    );
  },
};

export const Small: Story = {
  render: (args) => (
    <ChartContainer {...args} className="w-full h-[200px]">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          outerRadius={70}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
};
