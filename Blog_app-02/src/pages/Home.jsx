import React, { useState } from "react";
import { useEffect } from "react";
import blogService from "../appwrite/blog";
import { Container, PostCards } from "../components";
const Home = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    blogService.getPosts().then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <>
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </Container>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCards {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
