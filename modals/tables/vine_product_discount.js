const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_product_discount', {
    product_discount_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    discount_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sort_order: {
      type: DataTypes.INTEGER,
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
    tableName: 'vine_product_discount',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_discount_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
