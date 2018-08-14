let storage = {
  apiKey: 'f648ab0b5fb14153e4ec615d63bc595e',
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    // {
    //   title: 'Popular Movies',
    //   shortTitle: 'Popular',
    //   query: 'popular',
    //   type: 'collection',
    //   isCategory: true
    // },
    {
      title: 'Now Playing Movies',
      shortTitle: 'Now Playing',
      query: 'now_playing',
      type: 'collection',
      isCategory: true
    }
  ],
  categories: {},
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
}
storage.listTypes.forEach(function (listType) {
  storage.categories[listType.query] = listType.title
})

export default storage
