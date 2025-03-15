import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Hello NextJS</h1>
      <div className="flex justify-center mt-4">
        <Button variant={"destructive"} size={"sm"}>
          Новости
        </Button>
      </div>
    </div>
  );
}
