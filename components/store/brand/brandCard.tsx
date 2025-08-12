import { Card } from "@/components/ui/card";

export default function CardBrand({ photo }: { photo: string }) {
  return (
    <Card
      dir={"rtl"}
      className=":h-[15rem] sm:w-[10rem]"
    >
      <img className="rounded-xl" height="80" src={photo} />
    </Card>
  );
}
