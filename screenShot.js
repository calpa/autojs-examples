const startX = 400;
const startY = 700;

const start = [startX, startY];

const end = (x, y) => [x, y + 500];

function main() {
  gestures(
    [0, 500, start, end(startX, startY)],
    [0, 500, [startX + 100, startY], end(startX + 100, startY)],
    [0, 500, [startX + 200, startY], end(startX + 200, startY)]
  );

  setTimeout(() => {
    const x = 900;
    const y = 300;
    console.log("开始点击 x: " + x + " " + "y: " + y);
    click(x, y);
  }, 2000);
}

main();
