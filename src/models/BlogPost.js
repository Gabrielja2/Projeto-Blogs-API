module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
  },
    {
      underscored: true,
      tableName: 'blog_posts',
      timestamps: false,
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  };
    

  return BlogPost;
};