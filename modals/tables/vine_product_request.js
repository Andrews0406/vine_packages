module.exports = function (sequelize, DataTypes) {
    return sequelize.define('vine_product_request', {
        request_id: {
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
        product: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'vine_product_request',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "request_id" },
                ]
            },
        ]
    });
};
