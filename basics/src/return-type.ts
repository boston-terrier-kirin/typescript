const dataBuilder = () => {
  return {
    a: 'test A',
    b: 'test B',
  };
};

// dataBuilderからの戻りを型に変えることができる。
type IData = ReturnType<typeof dataBuilder>;

const buildData = dataBuilder();

const dataHandler = (param: IData) => {
  console.log(param);
};

dataHandler(buildData);
