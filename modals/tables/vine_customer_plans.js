module.exports = function (sequelize, DataTypes) {
    const vine_customer_plans = sequelize.define('vine_customer_plans', {
        customer_plan_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.CHAR(36),
            allowNull: true
        },
        plan_id: {
            type: DataTypes.CHAR(36),
            allowNull: true
        },
        plan_start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        plan_end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        next_plan_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        plan_price: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        billing_address_id: {
            type: DataTypes.CHAR(36),
            allowNull: true
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
        },
    }, {
        sequelize,
        tableName: 'vine_customer_plans',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "customer_plan_id" },
                ]
            },
        ]
    });
    vine_customer_plans.associate = (models) => {
        vine_customer_plans.belongsTo(models.vine_plan, { as: 'plan', foreignKey: 'plan_id' });
    };
    return vine_customer_plans;
};