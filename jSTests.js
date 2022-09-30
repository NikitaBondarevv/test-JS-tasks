const testObj = {
  has(result) {
    if (this.input.includes(result)) console.log('Success')
    else console.error(`${this.input} does not have ${result}`)
  },
  truthy() {
    if (this.input) console.log('Success')
    else console.error(`${this.input} is not true`)
  }
};

const test = (input) => {
  testObj.input = input;
  return testObj;
};
