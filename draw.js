// Control in the App

const needControl = dialogs.rawInput("需要重新配置设定？", "0");
let a = 600;
let b = 600;
let r = 200;
let numberOfCircle = 5;
let spacing = 30;

if (needControl == "1") {
  a = dialogs.input("请输入 x 坐标", a);
  b = dialogs.input("请输入 y 坐标", b);
  r = dialogs.input("请输入 radius", r);
  numberOfCircle = dialogs.input("几多个圈？", numberOfCircle);
  spacing = dialogs.input("间隔", spacing);
}

const circle = (x, y, r) => {
  let res = [];
  for (let i = 1; i < 65; i += 1) {
    let temp = ((2 * Math.PI) / 360) * 6 * i;
    let x = a + Math.sin(temp) * r;
    let y = b - Math.cos(temp) * r;

    res.push([x, y]);
  }
  return res;
};

const multiCircle = (number, spacing) => {
  let ans = [];
  for (let i = 1; i < number; i += 1) {
    ans = ans.concat(circle(a, b, r - i * spacing));
  }

  return ans;
};

const pos = multiCircle(numberOfCircle, spacing);
const time = numberOfCircle * 2000;

gesture(time, pos);
