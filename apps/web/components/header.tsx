import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="w-12 h-12 rounded-full">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-start gap-4 w-full border-b pb-2 shadow-sm shadow-gray-200">
      <AvatarDemo />
      <h3 className="text-primary">Start Up</h3>
    </header>
  );
}
