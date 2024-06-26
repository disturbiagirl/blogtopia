export const fetchPosts = async () => {
  try {
    const data = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=${30}`
    ).then((response) => response.json());

    const posts = await data.blogs;
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (id: number) => {
  try {
    const data = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    ).then((response) => response.json());
    const post = await data.blog;
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAuthor = async (id: number) => {
  try {
    const data = await fetch(
      `https://api.slingacademy.com/v1/sample-data/users/${id}`
    ).then((response) => response.json());
    const author = await data.user;
    return author;
  } catch (error) {
    console.log(error);
  }
};
