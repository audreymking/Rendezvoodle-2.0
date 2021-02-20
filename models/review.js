module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    //Giving the Reviewer model a name of type STRING
    name: DataTypes.STRING
  });

  Review.associate = models => {
    // Associating Reviewer with Reviews
    Review.belongsTo(models.Reviewer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Review;
};
