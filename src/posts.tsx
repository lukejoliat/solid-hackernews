import { For, createEffect, createResource } from "solid-js";
import styles from "./App.module.css";
import { Post as Ptype } from "./post-type";

const fetchData = async () =>
  (await fetch(`https://node-hnapi.herokuapp.com/news?page=1`)).json();

export const Posts = () => {
  const [data] = createResource<Ptype[]>(fetchData);
  createEffect(() => {
    console.log(data());
  });

  return (
    <ul class={styles.posts}>
      <For each={data()}>
        {(post, i) => (
          <li>
            <a target="_blank" href={post.url}>
              {i() + 1}: {post.title}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};
