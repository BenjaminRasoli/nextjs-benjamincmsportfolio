// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

import HeroServer from "./components/Hero/HeroServer";

function Page() {
  return (
    <main>
      <HeroServer />
    </main>
  );
}

export default Page;
