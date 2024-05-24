import { Comment } from "./comments";

export interface Post {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: "link" | "ask" | "job" | "show" | "poll" | "pollopt" | "comment";
  url: string;
  user: string;
  comments?: Comment[];
}
