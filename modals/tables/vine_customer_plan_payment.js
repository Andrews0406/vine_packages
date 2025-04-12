module.exports = function (sequelize, DataTypes) {
    const vine_customer_plan_payment = sequelize.define('vine_customer_plan_payment', {
        payment_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        customer_plan_id: {
            type: DataTypes.CHAR(36),
            allowNull: true
        },
        ticket: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        response: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'vine_customer_plan_payment',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "payment_id" },
                ]
            },
        ]
    });
    vine_customer_plan_payment.associate = (models) => {
        vine_customer_plan_payment.belongsTo(models.vine_customer_plans, { as: 'customer_plan', foreignKey: 'customer_plan_id' });
    };
    return vine_customer_plan_payment;
};