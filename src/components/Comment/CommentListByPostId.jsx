import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );

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
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              <a className="block hover:text-blue-500">{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
