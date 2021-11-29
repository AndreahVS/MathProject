/// Расчёт
let a, b, c, discr;
const math = (a, b, c) => {
  discr = b * b - 4 * a * c;
  discrSqrt = Math.sqrt(discr);
  /* IF Version
  if (discr > 0) {
      let x1, x2;
      x1 = (-b - discrSqrt) / 2;
      x2 = (-b + discrSqrt) / 2;
      console.log(
        `Первый корень уравнения = ${x1}, второй корень уравнения = ${x2}`
      );
      return x1, x2;
    }
    if (discr == 0) {
      let x1;
      x1 = -b / 2;
      console.log(`У уравнения только один корень и он равен = ${x1}`);
      return x1;
    }
    if (discr < 0) {
      let x = console.log("Корней нет");
      return x;
    }*/
  // Switch Version
  switch (true) {
    case discr > 0:
      let x1, x2;
      x1 = (-b - discrSqrt) / 2;
      x2 = (-b + discrSqrt) / 2;
      console.log(
        `Первый корень уравнения = ${x1}, второй корень уравнения = ${x2}`
      );
      break;
    case discr === 0:
      let x3;
      x3 = -b / 2;
      console.log(`У уравнения только один корень и он равен = ${x3}`);
      return x3;
      break;
    case discr < 0:
      let x = console.log("Корней нет, так как дискриминант меньше нуля");
      return x;
      break;
    default:
      alert("Произошла ошибка, возможно вы что-то ввели неправильно");
  }
};
math(1, 4, 1);
