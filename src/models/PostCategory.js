module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
      // ainda não entendi bem se realmente precisa deles aqui ou não, na aula o prof não os colocou.
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostCategory,
      primaryKey: 'category_id',
      otherKey: 'post_id'
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'Category',
      through: PostCategory,
      primaryKey: 'post_id',
      otherKey: 'category_id'
    });
  };





  return PostCategory;
};