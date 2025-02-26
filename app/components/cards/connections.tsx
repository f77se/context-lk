import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  connections?: number;
};

export function ConnectionsCard({ connections = 0 }: Props) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Connections</CardTitle>
        <CardDescription>Total connections.</CardDescription>
      </CardHeader>
      <CardContent className="text-center ">
        <p className="text-7xl mb-4">{connections}</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aliquid, consequatur placeat atque optio neque.
        </p>
      </CardContent>
    </Card>
  );
}
