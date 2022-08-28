const findFriends = (friends) => {
  const newFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      newFriends.push(friend);
    }
  }
  return newFriends;
};
const friends = [
  "Rasel",
  "Ashraful",
  "Ali",
  "AbdulHalim",
  "Shafaet",
  "Akash",
  "Asif",
  "Juel",
  "Habib",
];
console.log(findFriends(friends));
