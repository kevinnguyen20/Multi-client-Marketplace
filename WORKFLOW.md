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

NPM will then install the Express module because it is currently the only
dependency defined in your package.json file.
