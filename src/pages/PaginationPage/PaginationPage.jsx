import React, { useState, useEffect } from "react";
import Follower from "../../components/Follower/Follower";
import { useFetch } from '../../helpers/useFetch';
import s from "./PaginationPage.module.css";
const PaginationPage = () => {
  const {loading, data} = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page])
  
  const handlePage = (index) => {
    setPage(index);
  };


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <div>
      <div className={s.sectionTitle}>
        <h1 className={s.title}>{loading ? "Loading..." : "Pagination"}</h1>
        <div className={s.underline}></div>
      </div>
      <section className={s.followers}>
        <div className={s.container}>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className={s.btnContainer}>
            <button className={s.prevBtn} onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className={s.nextBtn} onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PaginationPage;