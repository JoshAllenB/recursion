function fib(count) {
  var fibSeq = [0, 1];

  for (var i = 2; i < count; i++) {
    var nextFib = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(nextFib);
  }

  return fibSeq;
}

var count = 8;
var fibSeq = fib(count);
console.log("Fibonacci sequence up to " + count + " terms: " + fibSeq);

function fibRec(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibRec(n - 1) + fibRec(n - 2);
  }
}

function genFib(count) {
  var fibSeq = [0, 1];

  for (var i = 2; i < count; i++) {
    var nextFib = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(nextFib);
  }

  return fibSeq;
}

var count = 20;
var fibSeq = genFib(count);
console.log("Fibonacci sequence up to " + count + " terms: " + fibSeq);