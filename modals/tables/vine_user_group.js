const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_user_group', {
    user_group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    permissions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.TIMESTAMP,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.TIMESTAMP,
      allowNull: true
    },
    date_deleted: {
      type: DataTypes.TIMESTAMP,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_user_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_group_id" },
        ]
      },
    ]
  });
};
