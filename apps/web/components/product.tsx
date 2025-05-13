import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Momo from "../assets/Momo.jpg";

export function Product() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Chicken Momo</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={Momo}
          alt="Chicken Momo"
          className="w-full h-48 object-cover rounded-lg"
        />
      </CardContent>
      <CardFooter className="w-full flex justify-between items-center">
        <code>Rs.120</code>
        <Button>
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
