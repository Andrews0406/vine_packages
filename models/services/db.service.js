const { Op } = require("sequelize");
const models = require("../index");
let instance;

DB.getInstance = function () {
  if (instance == null) {
    instance = new DB();
  }
  return instance;
};

function DB() { }

DB.prototype._get = async (
  model,
  options = {},
  projection = {},
  selection = [],
  includes = [],
  group = [],
  having = "",
  distinct = false,
  col = "",
  subquery = true,
  deletedAt = true
) => {
  try {
    let query = { where: { deletedAt: null } };
    if (!deletedAt) query = {}
    if (!subquery) query["subquery"] = false;

    let perpage = 10;

    if (selection.length > 0) query["attributes"] = selection;
    if (group.length > 0) query["group"] = group;
    if (having) query["having"] = having;

    query["where"] = whereClause(projection, query);

    if (options.page_number) {
      if (options.records_per_page) perpage = options.records_per_page;
      query["limit"] = perpage;
      query["offset"] = perpage * (options.page_number - 1);
    }
    if (distinct) query["distinct"] = true;
    if (col) query["col"] = col;

    if (includes.length > 0) query["include"] = includes;

    if (options.sort) query["order"] = options.sort;
    else if (group.length == 0) query["order"] = [["date_modified", "DESC"]];
    return await model.findAndCountAll(query);
  } catch (error) {
    throw error;
  }
};

DB.prototype._add = async (model, data) => {
  try {
    if (Array.isArray(data)) return await model.bulkCreate(data);
    else return await model.create(data);
  } catch (error) {
    if (error["errors"] && error["errors"][0]) {
      throw error["errors"][0]["message"];
    } else {
      throw error;
    }
  }
};

DB.prototype._update = async (model, data, projection = {}) => {
  try {
    let query = !!Object.keys(projection).length
      ? { where: whereClause(projection) }
      : {};

    return await model.update(data, query);
  } catch (error) {
    if (error["errors"] && error["errors"][0]) {
      throw error["errors"][0]["message"];
    } else {
      throw error;
    }
  }
};

DB.prototype._findByCount = async (
  model,
  projection = {},
  selection = [],
  includes = [],
  limit = 0
) => {
  try {
    let query = {};

    query["where"] = whereClause(projection, query);

    if (selection.length > 0) {
      query["attributes"] = selection;
    }
    if (limit != 0) query["limit"] = parseInt(limit);
    if (includes.length > 0) query["include"] = includes;
    return await model.findAll(query);
  } catch (error) {
    throw error;
  }
};

DB.prototype._find = async (
  model,
  projection = {},
  selection = [],
  includes = []
) => {
  try {
    let query = { where: { deletedAt: null } };

    query["where"] = whereClause(projection, query);

    if (selection.length > 0) {
      query["attributes"] = selection;
    }

    if (includes.length > 0) query["include"] = includes;

    return await model.findOne(query);
  } catch (error) {
    throw error;
  }
};

DB.prototype._count = async (model, projection = {}) => {
  try {
    let query = {};

    query["where"] = whereClause(projection, query);

    return await model.count(query);
  } catch (error) {
    throw error;
  }
};

DB.prototype._createOrUpdate = async (model, projection = {}, newItem) => {
  try {
    let query = {};

    query["where"] = whereClause(projection, query);

    return await model.findOne(query).then((foundItem) => {
      if (!foundItem) {
        // Item not found, create a new one
        return model.create(newItem).then((item) => {
          return item;
        });
      }
      // Found an item, update it
      return model.update(newItem, query).then((item) => {
        return newItem;
      });
    });
  } catch (error) {
    throw error;
  }
};

DB.prototype._delete = async (model, projection = {}) => {
  try {
    let query = !!Object.keys(projection).length ? whereClause(projection) : {};

    await model.update({ deletedAt: new Date() }, { where: query });
  } catch (error) {
    console.log(error);
    if (error["errors"] && error["errors"][0]) {
      throw error["errors"][0]["message"];
    } else {
      throw error;
    }
  }
};

DB.prototype._totalCount = async (model, projection = {}) => {
  try {
    let query = !!Object.keys(projection).length ? whereClause(projection) : {};

    return await model.count({ where: query });
  } catch (error) {
    console.log(error);
    if (error["errors"] && error["errors"][0]) {
      throw error["errors"][0]["message"];
    } else {
      throw error;
    }
  }
};

const whereClause = (projection, query = {}) => {
  let q = { ...query["where"] };
  if (!!Object.keys(projection).length) {
    for (let [key, value] of Object.entries(projection)) {
      if (Array.isArray(value) && !!Object.keys(value).length) {
        if (key == "and") q[Op.and] = value;
        if (key == "or") q[Op.or] = value;
      } else q[key] = value;
    }
  }
  return q;
};

DB.prototype._findCount = async (
  model,
  projection = {},
  selection = [],
  includes = [],
  limit = 0
) => {
  try {
    let query = {};

    query["where"] = whereClause(projection, query);

    if (selection.length > 0) {
      query["attributes"] = selection;
    }
    if (limit != 0) query["limit"] = parseInt(limit);
    if (includes.length > 0) query["include"] = includes;
    return await model.count(query);
  } catch (error) {
    throw error;
  }
};

DB.prototype._findOneAndUpdate = async (
  model,
  projection = {},
  update = {}
) => {
  try {
    let query = {};
    query["where"] = whereClause(projection, query);
    let value = await model.findOne(query);
    if (!value) "Value not available";
    return await model.update(update, { where: { id: value.id } });
  } catch (error) {
    throw error;
  }
};

module.exports = DB;
