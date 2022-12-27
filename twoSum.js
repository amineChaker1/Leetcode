//first solution
var twoSum = function (nums, target) {
  var out = [];
  var increment = 0;
  for (let i = increment + 1; i < nums.length; i++) {
    if (nums[increment] + nums[i] == target) {
      out.push(increment);
      out.push(i);
    }
  }
  increment++;
  for (let j = increment + 1; j < nums.length - 1; j++) {
    if (nums[increment] + nums[j] == target) {
      out.push(increment);
      out.push(j);
    }
  }
  return out;
};
twoSum([3, 2, 3], 6);
// second solution
var twoSum = function (nums, target) {
  var out = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        out.push(i);
        out.push(j);
        return out;
      }
    }
  }
};
twoSum([3, 2, 4], 6);
