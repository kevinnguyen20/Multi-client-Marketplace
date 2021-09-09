# Workflow

## Rebasing - Basics

You check out the experiment branch, and then rebase it
onto the master branch as follows:

```
$ git checkout experiment
$ git rebase master
```

This operation works by going to the common ancestor of
the two branches (the one you’re on and the one you’re
rebasing onto), getting the diff introduced by each commit
of the branch you’re on, saving those diffs to temporary
files, resetting the current branch to the same commit as
the branch you are rebasing onto, and finally applying each
change in turn.

At this point, you can go back to the master branch and do
a fast-forward merge.

```
$ git checkout master
$ git merge experiment
```

There is no difference in the end product of the
integration, but rebasing makes for a cleaner history. If
you examine the log of a rebased branch, it looks like a
linear history: it appears that all the work happened in
series, even when it originally happened in parallel.

You can remove the test branch because all
the work is integrated and you don’t need them anymore.

```
$ git branch -d test-branch
```

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
$npm install
```

NPM will then install the Express module because it is currently the only
dependency defined in your package.json file.
