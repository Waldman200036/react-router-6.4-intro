import { sleep } from './sleep';

export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}

export async function getSlowPosts() {
  await sleep(2000);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}

<<<<<<< HEAD
export async function getPost(id) {
  return fetch('https://jsonplaceholder.typicode.com/posts/' + id);
}

export async function savePost(data) {
  const post = {
    title: data.get('title'),
    body: data.get('post-text'),
  };

  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    return { isError: true, message: 'Invalid input data provided.' };
=======
export async function savePost(post) {
  if (post.post.title.trim().length < 5 || post.post.body.trim().length < 10) {
    throw { message: 'Invalid input data provided.', status: 422 };
>>>>>>> Fetch Error Handling through new Router
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
  
}
