# Workflow

## Updating dependencies

Directly installing modules isn't really scalable. Think about it for a second:
you're going to use many Node modules in your application, transfer it between
working environments, and probably share it with other developers. So, installing
the project modules this way will soon become a dreadful task. Instead, you should
start using the package.json file that organizes your project metadata and helps
you manage your application dependencies.

In the ```package.json``` file, note that you included three properties, the name and
version of your application and the dependencies property that defines what
modules should be installed before your application can run. To install your
application dependencies, use your command-line tool, and navigate to your
application folder, and then issue the following command:

```
$ npm install
```

## Using mongosh

### Basics

- ```> use <db-name>```: switch database

- ```> show dbs```: list all database with documents

- ```> show collections```: list all collections within the database

- ```> db.<collection-name>.insert()```: insert a document

- ```> db.<collection-name>.find()```: list all documents

- ```> db.<collection-name>.drop()```: delete collection

- ```> db.<collection-name>.update(...,...,{upsert: true})```: update an existing document, creating new document if required

- ```> db.<collection-name>.update(...,...,{multi: true})```: update all the documents that comply with the selection criteria

- ```> db.<collection-name>.save()```: creating new document if not existing, updating document if ```_id``` exists

- ```> db.<collection-name>.remove()```: remove all documents (won't delete the collection or its indexes)

- ```db.<collection-name>.remove({ "property1": "value1" }, true)```: remove only one document

### Query operators

- ```> db.<collection-name>.find({"property1": { $in: ["value1", "value2"]}})```

- ```> db.<collection-name>.find({ "property1": "value1", "property2": { $gt: value } })```

- ```> db.<collection-name>.find( { $or: [{ "property1": "value1" }, {"property2": "value2"}] })```
