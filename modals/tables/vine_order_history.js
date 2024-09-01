module.exports = function (sequelize, DataTypes) {
  const vine_order_history = sequelize.define('vine_order_history', {
    order_history_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
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
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "order_status_id",
        using: "BTREE",
        fields: [
          { name: "order_status_id" },
        ]
      },
    ]
  });
  vine_order_history.associate = (models) => {
    vine_order_history.belongsTo(models.vine_order, { foreignKey: 'order_id', as: 'order' });
    vine_order_history.belongsTo(models.vine_order_status, { foreignKey: 'order_status_id', as: 'order_history' });
  }
  return vine_order_history;
};
