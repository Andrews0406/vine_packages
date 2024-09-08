module.exports = function (sequelize, DataTypes) {
  const vine_faq = sequelize.define('vine_faq', {
    faq_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    faq_cat_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    question: {
      type: DataTypes.Text,
      allowNull: false
    },
    answer: {
      type: DataTypes.Text,
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
    tableName: 'vine_faq',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_id" },
        ]
      },
      {
        name: "faq_cat_id",
        using: "BTREE",
        fields: [
          { name: "faq_cat_id" },
        ]
      },
    ]
  });
  vine_faq.associate = (models) => {
    vine_faq.belongsTo(models.vine_faq_category, { as: 'faq_category', foreignKey: 'faq_cat_id' });
  };
  return vine_faq;
};
