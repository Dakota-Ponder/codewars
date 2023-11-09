// write a function that calculates the total time
// required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.
// Each integer represents a customer, and its value is the amount
// of time they require to check out.
// n: a positive integer, the number of checkout tills.

let customerArr = [5, 3, 4];

// ouput
// The function should return an integer, the total time required.
function queueTime(customers, n) {
  // if no customers return 0
  if (customers.length === 0) {
    return 0;
  }

  // if only 1 till then the total time is the sum of of the customers
  if (n === 1) {
    return customers.reduce((total, customers) => total + customers, 0);
  }

  // if more tills than customers return the biggest num from the array
  if (n > customers.length) {
    return Math.max(...customers);
  }

  // Create an array (tills) to represent each checkout till. The length of
  // this array is n, and initially, all the tills are free, so their value
  // would be 0(no time until they are free)
  let tills = new Array(n).fill(0);

  // loop through each customer
  for (let i = 0; i < customers.length; i++) {
    // find the till that will be free first
    let nextTillIndex = 0;
    for (let j = 1; j < tills.length; j++) {
      if (tills[j] < tills[nextTillIndex]) {
        nextTillIndex = j;
      }
    }
    // add the current customers time to the till that is free first
    tills[nextTillIndex] += customers[i];
  }

  // find the total time as the max time in the tills array
  let totalTime = tills[0];
  for (let k = 1; k < tills.length; k++) {
    if (tills[k] > totalTime) {
      totalTime = tills[k];
    }
  }
  return totalTime;
}

// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12
