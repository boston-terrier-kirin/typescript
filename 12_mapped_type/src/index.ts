type Artist = {
  id: number;
  name: string;
  bio: string;
};

// Partialの変化系みたいなのができる。
// type MappedArtistForEdit = {
//   id?: number | undefined;
//   name?: string | undefined;
//   bio?: string | undefined;
// } & {
//   id: number;
// }
type MappedArtistForEdit = {
  [Property in keyof Artist]?: Artist[Property];
} & { id: number }; // id を intersection して、idは必須にする。

const artist: Artist = {
  id: 1,
  name: 'Justin',
  bio: 'Hey, I am Justin',
};

// これで id が必須になる。
// Partialだと、本当に必要な項目も省略できてしまう。
const editArtistReq: MappedArtistForEdit = {
  id: 1,
  // nameがなくてもＯＫ
  bio: 'Hi, I am Justin',
};
