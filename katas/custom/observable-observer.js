/*

Kata Nível Custom kyu - Entendendo Observable ,Observer e Subscriber

Crie uma classe Observable que possui um método subscribe que possa
receber 3 parâmetros

1º - observerOrNext - Um observer ou um callback
2º - errorFn (opcional) - Callback a ser executado caso ocorra algum erro.
3º - completeFn (opcional) Callback a ser executado quando o observable for completado

*/

class Subscriber {
  closed = false;
  observer;

  constructor(observerOrNext, errorFn, completeFn) {
    this.observer = this.createSubscriber(observerOrNext, errorFn, completeFn);
  }

  next(value) {
    if (this.closed) return;
    this.observer.next(value);
  }

  error(error) {
    if (this.closed) return;
    this.closed = true;
    this.observer.error(error);
  }

  complete() {
    if (this.closed) return;
    this.closed = true;
    this.observer.complete();
  }

  createSubscriber(observerOrNext, errorFn, completeFn) {
    return {
      next: observerOrNext.next || observerOrNext,
      error: errorFn || observerOrNext.error,
      complete: completeFn || observerOrNext.complete,
    };
  }
}

class Observable {
  subscribeFn;

  constructor(subscriber) {
    this.subscribeFn = subscriber;
  }

  subscribe(observer) {
    const subscriber = new Subscriber(observer);
    return this.subscribeFn(subscriber);
  }
}

{
  // Teste 1 - Passando o objeto observer
  const test$ = new Observable((subscriber) => {
    subscriber.next("Hello");
  });

  nextOutputs = [];

  const observer = {
    next: (value) => {
      nextOutputs.push(value);
    },
  };

  test$.subscribe(observer);

  console.log(nextOutputs);

  console.log(assert(() => nextOutputs.length === 1));
  console.log(assert(() => nextOutputs[0] === "Hello"));
}
{
  // Teste 2 - Passando o objeto observer com os métodos next, error

  const test$ = new Observable((subscriber) => {
    subscriber.next("Hello");
    subscriber.error("Error");
  });

  nextOutputs = [];
  errorOutput = null;

  const observer = {
    next: (value) => nextOutputs.push(value),
    error: (value) => (errorOutput = value),
  };

  test$.subscribe(observer);

  console.log(nextOutputs);
  console.log(errorOutput);

  console.log(assert(() => nextOutputs.length === 1));
  console.log(assert(() => nextOutputs[0] === "Hello"));
  console.log(assert(() => errorOutput === "Error"));
}
{
  // Teste 3 - Passando o objeto observer com os métodos next, error e complete

  const test$ = new Observable((subscriber) => {
    subscriber.next("Hello");
    subscriber.error("Error");
    subscriber.complete();
  });

  nextOutputs = [];
  errorOutput = null;
  completeOutput = null;

  const observer = {
    next: (value) => nextOutputs.push(value),
    error: (value) => (errorOutput = value),
    complete: () => (completeOutput = true),
  };

  test$.subscribe(observer);

  console.log(nextOutputs);
  console.log(errorOutput);
  console.log(completeOutput);

  console.log(assert(() => nextOutputs.length === 1));
  console.log(assert(() => nextOutputs[0] === "Hello"));
  console.log(assert(() => errorOutput === "Error"));

  // O output do complete deve ser null pois quando ocorre um erro com um observable
  // o mesmo é completado porem sem executar o complete do observer
  console.log(assert(() => completeOutput === null));
}
{
  // Teste 4 - Passando apenas o callback next
  const test$ = new Observable((subscriber) => {
    subscriber.next("Hello");
  });

  nextOutputs = [];

  test$.subscribe((value) => nextOutputs.push(value));

  console.log(nextOutputs);

  console.log(assert(() => nextOutputs.length === 1));
  console.log(assert(() => nextOutputs[0] === "Hello"));
}
{
  // Teste 5 - Next callback não deve ser executado quando o observable for completado
  const test$ = new Observable((subscriber) => {
    subscriber.next("Hello");
    subscriber.complete();
    subscriber.next("World");
  });

  nextOutputs = [];
  completeOutput = null;

  const observer = {
    next: (value) => nextOutputs.push(value),
    complete: () => (completeOutput = true),
  };

  test$.subscribe(observer);

  console.log(nextOutputs);
  console.log(completeOutput);

  console.log(assert(() => nextOutputs.length === 1));
  console.log(assert(() => nextOutputs[0] === "Hello"));
  console.log(assert(() => completeOutput === true));
}

function assert(predicateFn) {
  const predicateResult = predicateFn();
  return predicateResult ? "Ok" : "Algo deu errado";
}
