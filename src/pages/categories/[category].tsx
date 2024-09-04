import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}