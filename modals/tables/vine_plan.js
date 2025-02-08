const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('vine_plan', {
        plan_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        plan_freq_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        free_delivery: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        vine_pricing: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        access_to_health_ai: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        set_harvest_day: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        service_fee: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        preferred_plan: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.SMALLINT,
            defaultValue: 0,
        },
        sort_order: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        date_added: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        date_modified: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        date_deleted: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'vine_plan',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "plan_id" },
                ]
            },
            {
                name: "plan_freq_id",
                using: "BTREE",
                fields: [
                    { name: "plan_freq_id" },
                ]
            },
        ]
    });
};
