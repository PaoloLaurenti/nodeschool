function loadUsers(userIds, load, done) {
  var users = []
  var completed = 0;
  users.forEach(function(userId, index) {
    load(userId, function(user) {
      users[index] = user;
      if (++completed === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers
