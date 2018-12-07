import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as moviesActions from "../actions/moviesActions";

class Gaspricelist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onGetMovies();
  }

  render() {
    const { movies } = this.props;
    if (movies.results) {
      return (
        <div className="container">
          <div className="results">
            {movies.results.map(movie => {
              return (
                <div key={movie.id}>
                  <div>{movie.title}</div>
                  <div>{movie.vote_average}</div>
                  <div>{movie.overview}</div>
                  <div>{movie.release_date}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div className="container">Wait</div>;
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

const mapDispatchToProps = {
  onGetMovies: moviesActions.getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gaspricelist)
);
