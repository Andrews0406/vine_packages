const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const vine_category = sequelize.define('vine_category', {
    category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_deleted: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "fk_parent_category",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
  vine_category.associate = (models) => {
    vine_category.belongsTo(models.vine_category_meta, { as: 'category_meta', foreignKey: 'category_id', targetKey: 'category_id' });
    vine_category.belongsTo(models.vine_category, { as: 'parent', foreignKey: 'parent_id', targetKey: 'category_id' });
    vine_category.hasMany(models.vine_category, { as: 'children', foreignKey: 'parent_id', targetKey: 'category_id' });
  };
  return vine_category;
};
