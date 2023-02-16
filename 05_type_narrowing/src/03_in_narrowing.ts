interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TvShow) {
  // Property 'numEpisodes' does not exist on type 'Movie'.
  // media.numEpisodes;

  // titleは共通なのでコンパイルエラーにならない。
  console.log('-----', media.title);

  // inでnarrowing。
  if ('episodeDuration' in media) {
    console.log(media.numEpisodes * media.episodeDuration);
  } else {
    console.log(media.duration);
  }
}

getRuntime({ title: 'Amadeus', duration: 120 });

getRuntime({ title: 'Ally My Love', numEpisodes: 12, episodeDuration: 30 });
