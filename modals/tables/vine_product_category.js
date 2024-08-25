const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const vine_product_category = sequelize.define('vine_product_category', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
      primaryKey: true
    },
    product_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
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
    tableName: 'vine_product_category',
    timestamps: false,
    indexes: [
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  vine_product_category.associate = (models) => {
    vine_product_category.belongsTo(models.vine_product, { foreignKey: 'product_id', as: 'product' });
    vine_product_category.belongsTo(models.vine_category, { foreignKey: 'category_id', as: 'category' });
  }
  return vine_product_category;
};
