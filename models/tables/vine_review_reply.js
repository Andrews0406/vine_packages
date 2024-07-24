const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vine_review_reply', {
    reply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    text: {
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
    }
  }, {
    sequelize,
    tableName: 'vine_review_reply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reply_id" },
        ]
      },
      {
        name: "review_id",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
