let i = 1;
while (i <= 5) {
  console.log(i);
  i--;
}

// when updation is wrong then The loop variable moves in the wrong direction or doesn’t change properly, which can lead to an infinite loop or a loop that never executes. In this case, since i is being decremented instead of incremented, it will eventually become negative and the condition i <= 5 will always be true, resulting in an infinite loop.

// To fix this, we should increment i instead of decrementing it:
// let j = 1;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }
