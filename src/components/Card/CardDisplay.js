import React from "react";
import styles from "../Card/CardDisplay.module.scss";

const CardDisplay = ({ cardData }) => {
  const videoSrc = `https://www.youtube.com/embed/${cardData.trailer_url}`;

  return (
    <article className={styles.singleAnime}>
      <img src={cardData.banner_image} alt={cardData.descriptions} />

      <footer>
        <div className={styles.animeInfo}>
          <h3>Title : {cardData.titles.en}</h3>
          <h4 className={styles.tourSeason}>
            Season Year : {cardData.season_year}
          </h4>
        </div>

        <video controls autoPlay mute>
          <iframe title="video player" src={videoSrc} />
        </video>

        <h4>Trailer URL : {cardData.trailer_url}</h4>
        <h4>No of Episodes : {cardData.episodes_count}</h4>
        {cardData.descriptions.en && cardData.descriptions.length ? (
          <p>Description : {cardData.descriptions.en}</p>
        ) : null}

        {cardData.genres && cardData.genres.length ? <h4>Geners:</h4> : null}
        <ul>
          {cardData.genres && cardData.genres.map((gener) => <li>{gener}</li>)}
        </ul>
      </footer>

      <button className={styles.deletebtn}>Add Review</button>
      <button className={styles.backbtn}>
        <a href="/search">Back</a>
      </button>
    </article>
  );
};

export default CardDisplay;

