type Student = {
  name: string;
  email: string;
  phone?: string;
};

const kirin: Student = {
  name: 'Kirin',
  email: 'kirin@test.com',
};

// undefined
console.log(kirin.phone);

class Doggy {
  // ここで?を使うこともできる。string | undefined になる。
  name?: string;
  email?: string;
}

const kuroro = new Doggy();
kuroro.name = 'Kuroro';
// kuroro.email = null; optionalにnullはセットできない。
