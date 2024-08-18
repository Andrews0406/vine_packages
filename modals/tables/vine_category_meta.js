const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_category_meta', {
    category_meta_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('uuid'),
      primaryKey: true
    },
    category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true,
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_keyword: {
      type: DataTypes.TEXT,
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
    tableName: 'vine_category_meta',
    timestamps: false,
    indexes: [
      {
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
