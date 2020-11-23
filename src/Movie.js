import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
	return <div class="movie">
		<img src={poster} alt={title} title={title} />
		<div class="movive__data">
			<h3 class="movie__title">{title}</h3>
			<h5 class="movie__year">{year}</h5>
			<ul class="movie__genres">
				{genres.map((genre, index) => (
						<li key={index} class="genres__genre">{genre}</li>
					))
				}
			</ul>
			<p class="movie__summary">{summary.slice(0, 180)}</p>
		</div>
	</div>;
}

// eslint-disable-next-line react/no-typos
Movie.propTypes = {
	id : propTypes.number.isRequired,
	year : propTypes.number.isRequired,
	title : propTypes.string.isRequired,
	summary : propTypes.string.isRequired,
	poster : propTypes.string.isRequired,
	genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;