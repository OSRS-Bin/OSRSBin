import React from "react";
import { faker } from "@faker-js/faker";

export default function Help() {
  return (
    <div>
      <h1 className="text-6xl font-runescape text-primary">Help</h1>

      <div className="space-y-4">
        <p>{faker.lorem.paragraph(5)}</p>

        <img
          src={faker.image.url({ height: 200, width: 300 })}
          alt="Random image"
          className="mx-auto"
        />

        <p>{faker.lorem.paragraph(5)}</p>

        <img
          src={faker.image.url({ height: 200, width: 300 })}
          alt="Random image"
          className="mx-auto"
        />
        
        <p>{faker.lorem.paragraph(5)}</p>
      </div>
    </div>
  );
}
