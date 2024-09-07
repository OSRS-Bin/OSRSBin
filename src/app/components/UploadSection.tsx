import { Button } from "@/components/Button";

export default function UploadSection() {
  return (
    <section className="text-center">
      <h2 className="font-runescape text-6xl leading-[4.5rem] leading text-primary">
        Upload Your Own
      </h2>
      <Button
        variant="secondary"
        size="lg"
        className="w-full mt-4 drop-shadow-[0_0_1rem_hsl(from_var(--primary)_h_s_l_/_0.5)]"
      >
        Upload
      </Button>
    </section>
  );
}
