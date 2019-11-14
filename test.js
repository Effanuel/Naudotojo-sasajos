var scaryClown = function() {
  console.log("clown");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
      console.log("resolved");
    }, 2000);
  });
};

var parallel = async function() {
  console.log("before");
  const wait1 = await scaryClown();
  console.log(wait1);
  console.log("AFTER WAIT 1");
  // …meaning this timer happens in parallel.
  //   const wait2 = await scaryClown();
  //   console.log("AFTER WAIT 2");

  // Wait 50ms for the first timer…
  await wait1;

  // …by which time this timer has already finished.
  //   await wait2;

  return false;
};

let m, qx, qy, px, py, min_return, max_return;
m = true;
while (parallel()) {
  console.log("go");
}
