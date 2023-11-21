interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  display(): void {
    // This method should be implemented in subclasses of Duck.
    // It represents how a specific duck looks like.
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log("모든 오리는 물에 뜹니다. 가짜오리도 뜨죠.");
  }
}
