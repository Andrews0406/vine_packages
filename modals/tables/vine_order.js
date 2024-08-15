const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_order', {
    order_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
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
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.DATE,
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
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    order_status_id: {
      type: DataTypes.CHAR(36),
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
      {
        name: "fk_order_status",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
    ]
  });
};