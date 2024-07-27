const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_order_history', {
    order_history_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
      primaryKey: true
    },
    order_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    order_status_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_order_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_history_id" },
        ]
      },
      {
        name: "fk_order_history_order",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "fk_order_history_status",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
    ]
  });
};
