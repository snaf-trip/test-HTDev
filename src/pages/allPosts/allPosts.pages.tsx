import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, Stack, TextField } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./allPosts.pages.scss";
import { Note } from "interfaces";
import { PostCard } from "../../components/postCard/postCard.components";
import { NumPostsFilter } from "../../components/numPostsFilter/numPostsFilter.components";

export const AllPostsPage = (): JSX.Element => {
  const location = useLocation();

  const [posts, setPosts] = useState<Array<Note>>([]);
  const [page, setPage] = useState(parseInt(location.search?.split("=")[1] || "1"));
  const [numPostsUnput, setNumPostsUnput] = useState("");
  const [numPosts, setNumPosts] = useState(10);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem("notes"));

    //Сохранение кол-ва выводящихся эелементов
    let storageNumPosts = localStorage.getItem("numPosts");
    if (
      storageNumPosts === null ||
      storageNumPosts === "" ||
      storageNumPosts === "0"
    ) {
      localStorage.setItem("numPosts", "10");
    } else {
      setNumPosts(JSON.parse(localStorage.getItem("numPosts")));
    };

    //Подсчет кол-ва страниц
    setPageQty(Math.ceil(allPosts.length / numPosts));

    //Посты для определённой страницы
    setPosts(allPosts.slice(
      page === 1 ? 0 : page * numPosts - numPosts,
      page === 1 ? numPosts : page * numPosts
    ));
  }, [page, numPosts])

  return (
    <div className="allPosts">
      <Stack spacing={2}>
        <NumPostsFilter
          setNumPostsUnput={setNumPostsUnput}
          numPostsUnput={numPostsUnput}
          setNumPosts={setNumPosts}
          setPage={setPage}
        />
        <div className="allPosts__postssList">
          {
            posts.map((post) => {
              return (
                <PostCard key={post.date.datetime} post={post} />
              )
            })
          }
        </div>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            showFirstButton
            showLastButton
            onChange={(_, num) => setPage(num)}
            renderItem={
              (item) => (
                <PaginationItem
                  component={Link}
                  to={`/allPosts?page=${item.page}`}
                  {...item}
                />
              )
            }
          />
        )}
      </Stack>
    </div>
  )
}
