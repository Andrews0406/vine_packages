module.exports = function (sequelize, DataTypes) {
    return sequelize.define('vine_newsletter', {
        newsletter_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_modified: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'vine_newsletter',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "newsletter_id" },
                ]
            },
        ]
    });
};
