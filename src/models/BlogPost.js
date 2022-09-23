module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
    {
      underscored: true,
      tableName: 'blog_posts',
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };
    

  return BlogPost;
};