import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No Comments Found.</p>;
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
