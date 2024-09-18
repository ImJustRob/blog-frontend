import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";

export function PostPage() {
    let name = "Test";
    let posts = [
      {
        id: 1,
        title: "The Tech Revolution in Football: Game Changers Ahead",
        body: "Players are now equipped with smart devices that track performance metrics like heart rate and sprint speed. This data helps tailor training and reduce injuries, allowing players to know exactly when to push or rest.",
        image: "https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/league/chuuosh7mauekwevl6ph.png",
      },
      {
        id: 2,
        title: "The Art of the Game: How Style is Shaping Modern Basketball",
        body: "Sneakers have become a symbol of individuality on and off the court. Players showcase their personality through their footwear, collaborating with brands to release limited-edition styles. This sneaker culture not only influences trends but also builds a connection between athletes and fans.",
        image: "https://media.gq.com/photos/6530196bb0d49951a9f0e96b/master/pass/basketball-shoes-for-men.jpg",
      },
      {
        id: 3,
        title: "Baseball's New Era: How Innovation is Changing America’s Pastime",
        body: "The use of analytics in baseball has skyrocketed, influencing everything from player recruitment to in-game strategy. Teams analyze vast amounts of data to optimize performance, including advanced metrics that evaluate a player’s value beyond traditional statistics. This shift has led to smarter game decisions and a more strategic approach to play.",
        image: "https://img.mlbstatic.com/mlb-images/image/upload/ar_16:9,g_auto,q_auto:good,w_1024,c_fill,f_jpg/mlb/jsozoawejhjxnqjboznj",
      },
    ];
  
  
    return (
      <main>
        <PostNew />
        <PostIndex name={name} posts={posts} />
      </main>
    )
  }