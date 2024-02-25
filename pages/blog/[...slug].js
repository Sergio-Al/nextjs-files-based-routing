import React from "react";
import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.pathname);

  // as the slug is an array, the query will be an object with an array of slugs
  // eg. /blog/first-post/second-post => { slug: ['first-post', 'second-post'] }
  console.log(router.query);

  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}

export default BlogPostsPage;