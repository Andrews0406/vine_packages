module.exports = function(sequelize, DataTypes) {
  const vine_wish =  sequelize.define('vine_wish', {
    wish_id: {
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
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_wish',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "fk_cart_customer",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "fk_cart_product",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      }
    ]
  });
  vine_wish.associate = (models) => {
    vine_wish.hasMany(models.vine_product, { as: 'product', foreignKey: 'product_id' });
  };
  return vine_wish;
};
