import { useLoaderData } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> Fetch Error Handling through new Router
import BlogPost from '../components/BlogPost';
import NewsletterSignup from '../components/NewsletterSignup';
import { getPost } from '../util/api';

function PostDetailPage() {
<<<<<<< HEAD
  const postData = useLoaderData();

  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
      <NewsletterSignup />
=======
 const postData = useLoaderData();
  return (
    <>

      <BlogPost title={postData.title} text={postData.body} />
>>>>>>> Fetch Error Handling through new Router
    </>
  );
}

export default PostDetailPage;

<<<<<<< HEAD
export function loader({ params }) {
  const postId = params.id;

  return getPost(postId);
}
=======
export function loader({params}){
  const postId = params.id;
  return getPost(postId);
}
>>>>>>> Fetch Error Handling through new Router
