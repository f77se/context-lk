import { SirenIcon } from "lucide-react";
import { cn } from "~/lib/utils";

export const StatusLight = ({
  a = false,
  b = false,
}: {
  a?: boolean;
  b?: boolean;
}) => {
  console.log(a, b);
  return (
    <SirenIcon
      className={cn(
        "size-5",
        !a && !b ? "text-gray-200" : "",
        !a && b ? "text-red-500" : "",
        a && !b ? "text-yellow-500" : "",
        a && b ? "text-green-500" : ""
      )}
    />
  );
};
