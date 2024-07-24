const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_return_history', {
    return_history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    return_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    return_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notify: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_return_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "return_history_id" },
        ]
      },
      {
        name: "return_id",
        using: "BTREE",
        fields: [
          { name: "return_id" },
        ]
      },
      {
        name: "return_status_id",
        using: "BTREE",
        fields: [
          { name: "return_status_id" },
        ]
      },
    ]
  });
};
