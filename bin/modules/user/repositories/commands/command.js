
class Command {

  constructor(db) {
    this.db = db;
  }

  async insertOneUser(document){
    this.db.setCollection('user');
    const result = await
    this.db.insertOne(document);
    return result;
  }
  async upsertOne(document,parameter ){
    this.db.setCollection('user');
    const result = await this.db.upsertOne(document, parameter);
    return result;
  }
}

module.exports = Command;
