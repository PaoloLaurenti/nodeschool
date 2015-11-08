function getDependencies(tree) {
  if (!tree || !tree.hasOwnProperty('dependencies'))
    return [];

  var dependencies = tree.dependencies;
  return Object
          .getOwnPropertyNames(dependencies)
          .reduce(function(resultArr, name) {
            resultArr.push(name + '@' + dependencies[name].version);
            return resultArr.concat(getDependencies(dependencies[name]));
          }, [])
          .reduce(function(arr, item) {
            if (arr.indexOf(item) < 0)
              arr.push(item);
            return arr;
          }, [])
          .sort();
}

module.exports = getDependencies
