/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a265a94caofj2ey")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0buujawy",
    "name": "id_agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ze0veo9sukaay6g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a265a94caofj2ey")

  // remove
  collection.schema.removeField("0buujawy")

  return dao.saveCollection(collection)
})
