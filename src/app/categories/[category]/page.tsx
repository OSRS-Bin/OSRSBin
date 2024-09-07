import React from "react";

export default function Category({ params }: { params: { category: string } }) {
  return <h1>Category: {params.category}</h1>;
}
