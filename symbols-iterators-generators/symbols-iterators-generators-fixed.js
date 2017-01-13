var numbers1 = {
  *[Symbol.iterator]() {
    for (var i = 0; i <= 100; i++) {
      yield i;
    }
  }
};

var numbers2 = {
  *[Symbol.iterator]() {
    for (var i = 6; i <= 30; i = i + 4) {
      yield i;
    }
  }
};

// should print 0..100 by 1s
for (let num of numbers1) {
  console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers2) {
  console.log(num);
}
