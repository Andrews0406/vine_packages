module.exports = function (sequelize, DataTypes) {
    const vine_wallet_transactions = sequelize.define('vine_wallet_transactions', {
        transaction_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        wallet_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        customer_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('credit', 'debit'),
            allowNull: false
        },
        source: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        reference_id: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        reference_table: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        balance_before: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        balance_after: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'failed', 'reversed'),
            allowNull: false,
            defaultValue: 'completed'
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
        }
    }, {
        sequelize,
        tableName: 'vine_wallet_transactions',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "transaction_id" },
                ]
            },
            {
                name: "idx_wallet_id",
                using: "BTREE",
                fields: [
                    { name: "wallet_id" },
                ]
            },
            {
                name: "idx_customer_id",
                using: "BTREE",
                fields: [
                    { name: "customer_id" },
                ]
            }
        ]
    });
    vine_wallet_transactions.associate = (models) => {
        vine_wallet_transactions.belongsTo(models.vine_wallets, { as: 'wallet', foreignKey: 'wallet_id' });
        vine_wallet_transactions.belongsTo(models.vine_customer, { as: 'customer', foreignKey: 'customer_id' });
    };
    return vine_wallet_transactions;
};
