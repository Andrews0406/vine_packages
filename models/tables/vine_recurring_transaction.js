const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_recurring_transaction', {
    recurring_transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recurring_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_recurring_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_recurring_transaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recurring_transaction_id" },
        ]
      },
      {
        name: "recurring_id",
        using: "BTREE",
        fields: [
          { name: "recurring_id" },
        ]
      },
    ]
  });
};
