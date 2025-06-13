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
      allowNull: false
    },
    period: {
      type: DataTypes.JSON,
      allowNull: false
    },
    no_reccurs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    product_discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
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
