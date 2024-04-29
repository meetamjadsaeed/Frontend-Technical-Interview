class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}
class Observer {
  constructor(subject) {
    this.subject = subject;
    this.subject.addObserver(this);
  }
  update() {
    console.log("State changed, update needed");
  }
}
// Usage
const subject = new Subject();
const observer1 = new Observer(subject);
const observer2 = new Observer(subject);
// When subject state changes
subject.notifyObservers();
