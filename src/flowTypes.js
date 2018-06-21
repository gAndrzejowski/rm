export type MovieData = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count?: number,
  release_date: string,
  poster_path: string,
  overview: string,
  genres: Array<string>,
  budget?: number,
  revenue?: number,
  runtime?: number,
}

export type RouteMatch = {
  params: Object<any>,
  path: string,
  isExact: boolean,
  url: string,
}

export type Action = {
  type: string
}

export type Store = {
  heading: {
    selected: number|null,
    search: string,
    by: string,
  },
  movies: {
    results: Array<MovieData>,
    sort: string,
  }
}
