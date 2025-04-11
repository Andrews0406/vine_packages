module.exports = function (sequelize, DataTypes) {
    return sequelize.define('vine_plan_freq', {
        plan_freq_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        plan_freq_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        plan_freq_value: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        plan_expire_days: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
        tableName: 'vine_plan_freq',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "plan_freq_id" },
                ]
            },
        ]
    });
};
