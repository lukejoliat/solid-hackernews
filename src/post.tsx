import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import { Post as PostType } from "./post-type";
import styles from "./App.module.css";
import { Comments } from "./comments";

const fetchPost: (id: string) => Promise<PostType> = async (id) => {
  const response = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
  return response.json();
};

export const Post = () => {
  const params = useParams();
  const [data] = createResource(() => params.id, fetchPost);

  return (
    <div class={styles.post}>
      <section class="heading">
        <div>
          <h3 style={{ margin: 0 }}>{data()?.title}</h3>
          <sub>
            By {data()?.user} {data()?.time_ago}
          </sub>
        </div>
      </section>
      <section class="comments">
        <Comments comments={data()?.comments} />
      </section>
    </div>
  );
};
