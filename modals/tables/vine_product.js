const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const vine_product = sequelize.define('vine_product', {
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock_status_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
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
      type: DataTypes.TIMESTAMP,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.TIMESTAMP,
      allowNull: true
    },
    date_deleted: {
      type: DataTypes.TIMESTAMP,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "fk_product_stock_status",
        using: "BTREE",
        fields: [
          { name: "stock_status_id" },
        ]
      },
    ]
  });
  vine_product.associate = (models) => {
    vine_product.hasOne(models.vine_product_meta, { as: 'product_meta', foreignKey: 'product_id' });
    vine_product.belongsToMany(models.vine_category, { through: models.vine_product_category, as: 'product_category', foreignKey: 'product_id', otherKey: 'category_id' });
    vine_product.hasMany(models.vine_product_specification, { as: 'product_specification', foreignKey: 'product_id' });
    vine_product.hasMany(models.vine_product_discount, { as: 'product_discount', foreignKey: 'product_id' });
    vine_product.hasMany(models.vine_product_sku, { as: 'product_sku', foreignKey: 'product_id' });
    vine_product.hasMany(models.vine_product_image, { as: 'product_image', foreignKey: 'product_id' });
  };
  return vine_product;
};
