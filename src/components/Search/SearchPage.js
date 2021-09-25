import React from "react";
import styles from "../Search/SearchPage.module.scss";
import * as Request from "../Store/Request";
import CardDisplay from "../Card/CardDisplay";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      animeData: [],
      searchValue: "",
      isCardClicked: false,
      clikedCard: {},
    };
  }

  animeCardClicked = (id) => {
    const card = this.state.animeData.find((anime) => anime.id === id);

    this.setState({
      isCardClicked: true,
      clikedCard: card,
    });
  };

  setSearchData = async (e) => {
    e.preventDefault();

    const searchString = this.state.searchValue;

    if (!searchString) {
      const fetchData = await Request.searchResult();

      const data = fetchData.data.documents;
      this.setState({
        animeData: data,
        isCardClicked: false,
        clikedCard: {},
      });
    }

    const data = this.state.animeData || [];
    const filteredData = data
      .map((anime) => {
        const regexString = new RegExp("^" + searchString);

        if (
          anime.titles.en.match(regexString) ||
          anime.descriptions.en.match(regexString)
        )
          return anime;
      })
      .filter(Boolean);

    this.setState({
      animeData: filteredData,
    });
  };

  async componentDidMount() {
    const fetchData = await Request.searchResult();

    const data = fetchData.data.documents;
    this.setState({
      animeData: data,
    });
  }

  render() {
    return this.state.isCardClicked ? (
      <CardDisplay cardData={this.state.clikedCard}></CardDisplay>
    ) : (
      <div>
        <h3 className={styles.heading}>Search Anime</h3>
        <div className={styles.search}>
          <form className={styles.searchform}>
            <input
              type="text"
              className={styles.forminput}
              placeholder="search"
              value={this.state.searchValue}
              onChange={(event) =>
                this.setState({ searchValue: event.target.value })
              }
            ></input>
            <button
              type="submit"
              className={styles.submitbtn}
              onClick={this.setSearchData}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <section>
          <div className={styles.container}>
            {this.state.animeData.map((anime, index) => {
              const id = anime.id;
              return (
                <div className={styles.cardClick}>
                  <h1
                    onClick={() => {
                      this.animeCardClicked(id);
                    }}
                  >
                    {" "}
                    {anime.titles.en}
                  </h1>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default SearchPage;
