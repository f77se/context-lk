import { Car, Cog } from "lucide-react";
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

export function DarkFiberCard({ connections = 0 }: Props) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Dark Fiber</CardTitle>
        <CardDescription>Number of dark fiber connections.</CardDescription>
      </CardHeader>
      <CardContent className="text-center ">
        <p className="text-7xl mb-4">{connections}</p>
        <p className="text-sm">
          Atque est eveniet quod aliquam necessitatibus. Numquam recusandae
          similique quia ut. Quisquam, cum?
        </p>
      </CardContent>
    </Card>
  );
}
