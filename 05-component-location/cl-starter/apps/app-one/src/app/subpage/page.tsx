"use client";
import { Button } from "@/components/ui/button";
import Heading from "./Heading";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-3xl">App One - Subpage</h1>
      <Button onClick={() => alert("Clicked")}>Click me</Button>
      <Heading>Subpage Heading</Heading>
    </main>
  );
}
