import React, { Component } from 'react';
import '../index.css';


class Top extends Component {
  state = {
    users: null,
    total: null,
    per_page: null,
    current_page: 1
  }


  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }


  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=907f40c96d15b4cefec4eeca3b414020&language=en-US&page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    this.setState({
      users: data.results,
      total: data.total_pages,
      per_page: data.total_results,
      current_page: data.page
    });
  }


  render() {

    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
    
     <div className="col-md-4 text-center">
       <img src={`https://image.tmdb.org/t/p/w500${user.poster_path}`} alt="" className="img"/>
     <div className="movie-item-style-2">
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">{user.title}</a></h6>
						<p className="rate"><i className="fa fa-star"></i><span>{user.vote_average}</span> /10</p>
						<p className="describe">{user.overview}</p>
						<p className="run-time"> Popularity: <span>{user.popularity}</span> Release: <span>{user.release_date}</span></p>
						<p>Language:<a href="#">{user.original_language}</a></p>
            <p>vote:<a href="#">{user.vote_count}</a></p>

					</div>
				</div>
  </div>

      ));
    }
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
    const numbersMultipledByTwo = numbers.map((number) => {
     return <div>       <button><span onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span></button>
     
     </div>
})

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classNamees = this.state.current_page === number ? 'red' : '';

        return (
          <span key={number} className={classNamees} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
    }
 
    return (


      <div className="container">
          <div className="pagination pagin">
         {numbersMultipledByTwo}
        </div>
        <div className="row">
            {users}
        </div>
        <div className="pagination pagin">
         {numbersMultipledByTwo}
        </div>

      </div>
    );
  }

}

export default Top;
