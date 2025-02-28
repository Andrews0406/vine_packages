module.exports = function (sequelize, DataTypes) {
  const vine_order = sequelize.define('vine_order', {
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    invoice_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_prefix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_place: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_postcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_place: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_postcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    tracking: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
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
    tableName: 'vine_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "fk_order_customer",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
  vine_order.associate = (models) => {
    vine_order.belongsTo(models.vine_customer, { as: 'order_customer', foreignKey: 'customer_id' });
    vine_order.belongsTo(models.vine_payment_methods, { as: 'order_payment_method', foreignKey: 'payment_method' });
    vine_order.belongsTo(models.vine_shipping_methods, { as: 'order_shipping_method', foreignKey: 'shipping_method' });
    vine_order.hasMany(models.vine_order_history, { as: 'order_history', foreignKey: 'order_id' });
    vine_order.hasMany(models.vine_order_product, { as: 'order_product', foreignKey: 'order_id' });
  };
  return vine_order;
};
