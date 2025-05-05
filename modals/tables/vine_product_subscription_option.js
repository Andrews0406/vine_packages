module.exports = function (sequelize, DataTypes) {
  return sequelize.define('vine_product_subscription_option', {
    product_subscription_option_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.JSON,
      allowNull: true
    },
    period: {
      type: DataTypes.JSON,
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    product_discount: {
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
    tableName: 'vine_product_subscription_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_subscription_option_id" },
        ]
      },
      {
        name: "fk_sku_product",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
