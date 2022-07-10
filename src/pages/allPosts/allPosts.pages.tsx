import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./allPosts.pages.scss";
import { Note } from "interfaces";
import { PostCard } from "../../components/postCard/postCard.components";

export const AllPostsPage = (): JSX.Element => {
  const location = useLocation();

  const [posts, setPosts] = useState<Array<Note>>([]);
  const [page, setPage] = useState(parseInt(location.search?.split("=")[1] || "1"));
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem("notes"));

    //Подсчет кол-ва страниц
    setPageQty(Math.ceil(allPosts.length / 6))

    //Посты для определённой страницы
    setPosts(allPosts.slice(
      page === 1 ? 0 : page * 6 - 6,
      page === 1 ? 6 : page * 6
    ))
  }, [page])

  return (
    <div className="allPosts">
      <Stack spacing={2}>
        <>
          <div className="allPosts__postssList">
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={post.date.datetime} post={post} index={index} />
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
        </>
      </Stack>
    </div>
  )
}
