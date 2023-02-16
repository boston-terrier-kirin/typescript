function saySomething(word: string | null) {
  if (word) {
    word.trim();
  }

  // 'word' is possibly 'null'.
  // word.trim();
}
