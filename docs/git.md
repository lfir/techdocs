---
title: Git
---

## Branches

### Create branch

```
git branch branchName
```

### Delete branch

```
git branch -D branchName
```

### List branches

```
git branch
```

### Merge target branch with current

```
git merge targetBranchName
```

Useful options:

- `--abort` aborts the merge process and reconstructs the pre-merge state (if the merge has not been committed yet and there is a merge conflict).
- `--ff` resolves the merge as a fast-forward if possible. Merge commit is not created. Used by default.
- `--no-ff` creates a merge commit in all cases, even when the merge could instead be resolved as a fast-forward.
- `-m msg` sets the commit message to be used for the merge commit (in case one is created).

### Move to branch

```
git checkout branchName
```

### Push local branch not existent in the remote repo

```
git push --set-upstream origin localBranchName
```

## Change remote's URL from HTTPS to SSH

```
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

## Cherry-pick

Apply a commit from one branch to a different one.

Find commit id.

```
git log
```

Switch to target branch and apply changes.

```
git checkout branch
```
```
git cherry-pick commitID
```

:::note
- `id1..idN` merges several commits, from `id1` to `idN`.
- If the name of a branch is passed instead of a commit id the last commit of that branch is selected.
- `-x` adds source commit id to commit message.
:::

## Create release tag

```bash
# Create a Lightweight or an Annotated tag (tagName cannot contain spaces).
# Lightweight tag.
git tag tagName
```
```bash
# Annotated tag.
git tag -a tagName -m 'tagMessage'
```
```bash
# Transfer tag to remote server.
git push -u origin tagName
```

:::note
Appears as `tagName` in the project's "Tags" page on GitHub and a Release can
be created based on it in the "Releases" section of the repository.
:::

## Download upstream and automatically merge local with it (fast forward)

```
git pull
```

## Download upstream without merging changes

```
git fetch
```

:::note
Branches are now accessible locally and can be merged into the currrent branch.
:::

## Hooks

Scripts triggered by certain events. These scripts take one of the names below and have to be placed in `.git/hooks` dir.

```bash
pre-commit
post-commit
pre-receive # Triggered when the remote receives the pushed changes
post-receive
```

## List commits in current branch

```
git log
```

## Remove and stop tracking file

```
git rm fileName
```
```
git commit -m "remove file"
```
```
echo "fileName" >> .gitignore
```
```
git commit -m "stop tracking file"
```

## Undo changes

### Return to state of specific commit

```bash
git reset commitID # or commitID~1 commit before commitID
```

Options.

- `--hard` modifies Staging, History and Working Directory.
- `--mixed` modifies Staging and History.
- `--soft` modifies History.
- `--merge` like --hard but does not affect uncommitted changes.

Push changes.

```
git push --force origin master
```

:::note
If forcing a push doesn't work the remote server is refusing non fast-forward pushes either via
`receive.denyNonFastForwards` config variable or update / pre-receive hook.
:::

Manually replace files (preserves history).

```bash
# Reset the local state.
git reset --hard 
```
```bash
# Copy the relevant part, e.g. the src directory.
cp -r src/ /tmp/
```
```bash
# Get the latest state again.
git pull
```
```bash
# Remove what is not needed anymore.
rm -rf src/
```
```bash
# Restore from the copy.
cp -r /tmp/src .
```
```bash
# Commit and push.
git commit -am 'Revert to commitID'
```
```
git push
```

### Revert changes to a file if they haven’t been committed yet

```
git checkout -- file
```

### Revert everything from HEAD back to a commit without losing history

```bash
git revert --no-commit 0766c053..HEAD # HEAD = latest commit in current branch
```
```
git commit
```

### Stash

#### Delete all elements in the stack

```
git stash drop
```

#### List elements in the stack and their index

```
git stash list
```

#### Restore changes from a specific element in the stack

```
git stash apply --index elementIndex
```

#### Restore changes from the head of the stack and remove it from the stack

```
git stash pop
```

#### Save working directory changes to the stack

```
git stash
```

:::tip
`push -m message` can be used to add a description of the changes that are going to be stashed.
:::
