module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Category;
};
