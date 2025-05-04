module.exports = function (sequelize, DataTypes) {
    const vine_wallets = sequelize.define('vine_wallets', {
        wallet_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.CHAR(36),
            allowNull: false
        },
        balance: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        status: {
            type: DataTypes.ENUM('active', 'suspended', 'closed'),
            allowNull: false,
            defaultValue: 'active'
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        date_modified: {
            type: DataTypes.DATE,
            allowNull: true,
            onUpdate: DataTypes.NOW
        },
        date_deleted: {
            type: DataTypes.DATE,
            allowNull: true
        },
        minimum_balance: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 10.00
        },
        auto_reload_amount: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 50.00
        },
        auto_reload_enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        sequelize,
        tableName: 'vine_wallets',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "wallet_id" },
                ]
            },
            {
                name: "unique_customer_wallet",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "customer_id" },
                ]
            }
        ]
    });
    vine_wallets.associate = (models) => {
        vine_wallets.belongsTo(models.vine_customer, { as: 'customer', foreignKey: 'customer_id' });
        vine_wallets.hasMany(models.vine_wallet_transactions, { as: 'transactions', foreignKey: 'wallet_id' });
    };
    return vine_wallets;
};
