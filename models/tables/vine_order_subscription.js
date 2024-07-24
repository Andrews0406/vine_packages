const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_order_subscription', {
    order_subscription_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscription_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trial_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    trial_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trial_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trial_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trial_remaining: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trial_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_order_subscription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_subscription_id" },
        ]
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "subscription_plan_id",
        using: "BTREE",
        fields: [
          { name: "subscription_plan_id" },
        ]
      },
    ]
  });
};
