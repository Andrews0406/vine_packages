module.exports = function (sequelize, DataTypes) {
  const vine_order = sequelize.define('vine_order', {
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    invoice_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_prefix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_address_2: {
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
    payment_country_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    payment_zone_id: {
      type: DataTypes.CHAR(36),
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
    shipping_firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipping_address_2: {
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
    shipping_country_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    shipping_zone_id: {
      type: DataTypes.CHAR(36),
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
      {
        name: "fk_order_payment_country",
        using: "BTREE",
        fields: [
          { name: "payment_country_id" },
        ]
      },
      {
        name: "fk_order_payment_zone",
        using: "BTREE",
        fields: [
          { name: "payment_zone_id" },
        ]
      },
      {
        name: "fk_order_shipping_country",
        using: "BTREE",
        fields: [
          { name: "shipping_country_id" },
        ]
      },
      {
        name: "fk_order_shipping_zone",
        using: "BTREE",
        fields: [
          { name: "shipping_zone_id" },
        ]
      },
    ]
  });
  vine_order.associate = (models) => {
    vine_order.belongsTo(models.vine_customer, { as: 'order_customer', foreignKey: 'customer_id' });
    vine_order.belongsToMany(models.vine_order_status, { through: models.vine_order_history, as: 'order_status', foreignKey: 'order_id', otherKey: 'order_status_id' });
    vine_order.hasMany(models.vine_order_product, { as: 'order_product', foreignKey: 'order_id' });
  };
  return vine_order;
};
