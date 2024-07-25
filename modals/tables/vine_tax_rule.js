const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_tax_rule', {
    tax_rule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tax_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tax_rate_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    based: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vine_tax_rule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_rule_id" },
        ]
      },
      {
        name: "tax_class_id",
        using: "BTREE",
        fields: [
          { name: "tax_class_id" },
        ]
      },
      {
        name: "tax_rate_id",
        using: "BTREE",
        fields: [
          { name: "tax_rate_id" },
        ]
      },
    ]
  });
};
