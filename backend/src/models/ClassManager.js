const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "schoolClass";
}

module.exports = ItemManager;
