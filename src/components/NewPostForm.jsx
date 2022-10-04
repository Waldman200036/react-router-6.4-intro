import { Form } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> Fetch Error Handling through new Router
import classes from './NewPostForm.module.css';

function NewPostForm({ onCancel, submitting }) {
  return (
<<<<<<< HEAD
    <Form className={classes.form} action="/blog/new" method="post">
=======
    <Form className={classes.form} method="post" action="/blog/new">
>>>>>>> Fetch Error Handling through new Router
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          required
          minLength={10}
          rows={5}
        ></textarea>
      </fieldset>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </button>
      <button disabled={submitting}>
        {submitting ? 'Submitting...' : 'Create Post'}
      </button>
    </Form>
  );
}

export default NewPostForm;
