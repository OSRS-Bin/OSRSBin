export default function Page({ params }: { params: { category: string } }) {
  return <div>Category: {params.category}</div>;
}
