module.exports = function (sequelize, DataTypes) {
  const vine_cart_subscribe = sequelize.define('vine_cart_subscribe', {
    cart_subscribe_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    product_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quantity: {
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
    tableName: 'vine_cart_subscribe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cart_subscribe_id" },
        ]
      }
    ]
  });
  vine_cart_subscribe.associate = (models) => {
    vine_cart_subscribe.belongsTo(models.vine_product, { as: 'product', foreignKey: 'product_id' });
  };
  return vine_cart_subscribe;
}
