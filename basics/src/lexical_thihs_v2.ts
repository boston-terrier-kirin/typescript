const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  },
};

// printColorの左側はcolor自身なので、この呼び方はOK
colors.printColor();

// これで呼んでしまうと、左側が何もなくなってしまうので、udefined.color になってしまう。
const test = colors.printColor;
test();
