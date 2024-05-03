/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a265a94caofj2ey")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zyrpggmo",
    "name": "Surface_m2",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a265a94caofj2ey")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zyrpggmo",
    "name": "Surface",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
