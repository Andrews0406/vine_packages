module.exports = function (sequelize, DataTypes) {
  const vine_faq_category =  sequelize.define('vine_faq_category', {
    faq_cat_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'vine_faq_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_cat_id" },
        ]
      },
    ]
  });
  vine_faq_category.associate = (models) => {
    vine_faq_category.hasMany(models.vine_faq, { as: 'faq', foreignKey: 'faq_cat_id' });
  };
  return vine_faq_category;
};
