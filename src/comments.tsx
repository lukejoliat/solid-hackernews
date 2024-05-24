import { For } from "solid-js";
import styles from "./App.module.css";

export interface Comment {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments?: Comment[];
}

const parser = new DOMParser();

export const Comments = (props: { comments?: Comment[] }) => {
  return (
    <div style={{ "padding-left": "1rem" }}>
      <For each={props.comments}>
        {(comment) => (
          <>
            <div class={styles.comment_author}>
              {comment.user} {comment.time_ago}
            </div>
            <div innerHTML={comment.content}> </div>
            <div>
              {comment.comments && <Comments comments={comment.comments} />}
            </div>
          </>
        )}
      </For>
    </div>
  );
};
