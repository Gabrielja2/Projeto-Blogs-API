module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      underscored: true,
      tableName: 'users',
    });
    
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'postId', as: 'blog_posts' });
  };

  return User;
};