import { Badge } from "@workspace/ui/components/badge";

export function Category() {
  return (
    <div className="flex w-full overflow-x-auto space-x-4 p-4">
      <Badge variant="secondary">Momo</Badge>
      <Badge variant="secondary">Chowmein</Badge>
      <Badge variant="secondary">Sausage</Badge>
      <Badge variant="secondary">Fried Rice</Badge>
      <Badge variant="secondary">Keema Noodles</Badge>
    </div>
  );
}
