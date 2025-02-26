import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { useAddressDetailCache } from "~/lib/detail-context";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
// ];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  adminUp: {
    label: "Admin Up",
    color: "var(--chart-1)",
  },
  adminDown: {
    label: "Admin Down",
    color: "var(--chart-2)",
  },
  serviceUp: {
    label: "Service Up",
    color: "var(--chart-3)",
  },
  serviceDown: {
    label: "Service Down",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function StatusPie() {
  const cache = useAddressDetailCache();
  const data = Array.from(cache.values());
  const adminUp = data.filter(
    (detail) => detail.a === true && detail.b === false
  ).length;
  const adminDown = data.filter(
    (detail) => detail.a === false && detail.b === false
  ).length;
  const serviceUp = data.filter(
    (detail) => detail.a === true && detail.b === true
  ).length;
  const serviceDown = data.filter(
    (detail) => detail.a === false && detail.b === true
  ).length;

  const totalServices = adminUp + adminDown + serviceUp + serviceDown;
  const chartData = [
    { label: "Admin Up", value: adminUp, fill: "var(--color-adminUp)" },
    { label: "Admin Down", value: adminDown, fill: "var(--color-adminDown)" },
    { label: "Service Up", value: serviceUp, fill: "var(--color-serviceUp)" },
    {
      label: "Service Down",
      value: serviceDown,
      fill: "var(--color-serviceDown)",
    },
  ];

  return (
    <Card className="flex flex-col">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Status</CardTitle>
        <CardDescription>Blabla uppe eller nere</CardDescription>
      </CardHeader> */}
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalServices.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Services
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
