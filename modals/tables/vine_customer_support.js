module.exports = function (sequelize, DataTypes) {
    return sequelize.define('vine_customer_support', {
        support_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'vine_customer_support',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "support_id" },
                ]
            },
        ]
    });
};
