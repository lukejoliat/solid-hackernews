import { For, createEffect, createResource } from "solid-js";
import styles from "./App.module.css";
import { Post as Ptype } from "./post-type";
import user from "/src/assets/user.svg";
import heart from "/src/assets/heart.svg";

const fetchData = async () =>
  (await fetch(`https://node-hnapi.herokuapp.com/news?page=1`)).json();

export const Posts = () => {
  const [data] = createResource<Ptype[]>(fetchData);

  return (
    <ul class={styles.posts}>
      <For each={data()}>
        {(post, i) => (
          <li class={styles.posts_item}>
            <div>
              {i() + 1}.
              <a target="_blank" href={post.url}>
                {post.title}
              </a>
            </div>
            <sub>
              <img style={{ width: "1rem" }} src={heart} alt="heart" />
              <span>{post.points} points</span>
              <img style={{ width: "1rem" }} src={user} alt="user" />
              <span>{post.user}</span>
              <a href={`/post/${post.id}`}>{post.comments_count} comments</a>
            </sub>
          </li>
        )}
      </For>
    </ul>
  );
};
