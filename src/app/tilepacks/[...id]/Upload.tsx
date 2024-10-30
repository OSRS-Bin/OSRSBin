"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Textarea } from "@/components/Textarea";
import { Input } from "@/components/Input";
import { uploadTilepack } from "./actions";

const uploadFormSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(10).max(5000),
  tiles: z
    .string()
    .min(1)
    .transform((value, ctx) => {
      let parsed;
      try {
        parsed = JSON.parse(value);
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid JSON",
        });
        return z.NEVER;
      }
      return parsed;
    })
    .refine((o) => tilePackTileSchema.safeParse(o).success === true, {
      message: "Invalid tile data",
    }),
});

export type UploadFormSchema = z.infer<typeof uploadFormSchema>;

const tilePackTileSchema = z
  .array(
    z
      .object({
        regionId: z.number().nonnegative().finite().safe(),
        regionX: z.number().nonnegative().finite().safe(),
        regionY: z.number().nonnegative().finite().safe(),
        z: z.number().nonnegative().finite().safe(),
        color: z.string().regex(/^#[0-9a-f]{8}$/i),
        label: z.string().optional(),
      })
      .strict()
  )
  .min(1)
  .max(200);

function slugifyTitle(title: string) {
  let slugged = title
    .trim()
    .toLowerCase()
    .replace("'", "")
    .replace(/[\p{P}\W]+/gu, "-");
  if (slugged.startsWith("-")) {
    slugged = slugged.slice(1);
  }
  if (slugged.endsWith("-")) {
    slugged = slugged.slice(0, -1);
  }
  return slugged;
}

export default function Upload() {
  // 1. Define your form.
  const form = useForm<UploadFormSchema>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <h1 className="font-runescape text-6xl text-primary">Upload Tilepack</h1>
      <form
        onSubmit={form.handleSubmit((values) =>
          uploadTilepack(JSON.stringify(values))
        )}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a title"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  spellCheck="false"
                  placeholder="Enter a description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tiles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tile Data</FormLabel>
              <FormControl>
                <Textarea
                  className="font-mono"
                  spellCheck="false"
                  placeholder="Enter a description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
