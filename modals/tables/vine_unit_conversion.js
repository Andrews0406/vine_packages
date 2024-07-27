const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_unit_conversion', {
    unit_conversion_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
      primaryKey: true
    },
    from_unit_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    to_unit_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    conversion_value: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
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
    tableName: 'vine_unit_conversion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "unit_conversion_id" },
        ]
      },
      {
        name: "from_unit_id",
        using: "BTREE",
        fields: [
          { name: "from_unit_id" },
        ]
      },
      {
        name: "to_unit_id",
        using: "BTREE",
        fields: [
          { name: "to_unit_id" },
        ]
      },
    ]
  });
};
