const posts = [
  { id: 1, category: "tech" },
  { id: 2, category: "food" },
  { id: 3, category: "tech" },
  { id: 4, category: "travel" },
  { id: 5, category: "food" },
];

const result = posts.reduce((acc, post) => {
  const category = post.category;

  if (!acc[category]) {
    acc[category] = { count: 0, items: [] };
  }

  acc[category].count += 1;
  acc[category].items.push(post);
  return acc;
}, {});

console.log(result);

/*
{
  tech: { count: 2, items: [...] },
  food: { count: 2, items: [...] },
  travel: { count: 1, items: [...] }
}
*/
