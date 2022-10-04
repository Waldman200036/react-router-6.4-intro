import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
<<<<<<< HEAD
} from 'react-router-dom';
=======
} from "react-router-dom";
>>>>>>> Fetch Error Handling through new Router

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const data = useActionData();
<<<<<<< HEAD

  const navigation = useNavigation();
  console.log(navigation.state);

  const navigate = useNavigate();

=======
  const navigate = useNavigate();
  const navigation = useNavigation();
>>>>>>> Fetch Error Handling through new Router
  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
<<<<<<< HEAD
      {data && data.isError && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
=======
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
>>>>>>> Fetch Error Handling through new Router
      />
    </>
  );
}

export default NewPostPage;

export async function action({ request }) {
<<<<<<< HEAD
  const data = await request.formData();

  const validationError = await savePost(data);
  if (validationError) {
    return validationError;
  }
  return redirect('/blog');
=======
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost({ post });
  } catch (error) {
    if (error.status === 422) {
      return error;
    }
    throw error;
  }
  return redirect("/blog");
>>>>>>> Fetch Error Handling through new Router
}
