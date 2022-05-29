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
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li
            key={comment.id}
            style={{ "border-bottom": "solid 1px #eaeaea" }}
            className="pb-2 border-b"
          >
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
