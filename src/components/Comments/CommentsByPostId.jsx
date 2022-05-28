import Link from "next/link";
import { useComponentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useComponentsByPostId(props.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>No Comments Found.</div>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
