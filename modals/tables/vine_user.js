const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const vine_user = sequelize.define('vine_user', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_group_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'vine_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_group_id",
        using: "BTREE",
        fields: [
          { name: "user_group_id" },
        ]
      },
    ]
  });

  vine_user.associate = (models) => {
    vine_user.belongsTo(models.vine_user_group, { as: 'role', foreignKey: 'user_group_id' });
  }

  return vine_user;
};
