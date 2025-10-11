import { Card } from "@/components/ui/card";

export default function CardBrand({ photo }: { photo: string }) {

  return (
    <Card
      className=":h-[15rem] sm:w-40"
    >
      <img className="rounded-xl" height="80" src={photo} />
    </Card>
  );
}
