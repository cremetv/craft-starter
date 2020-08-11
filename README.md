# craft-starter
personal basic template for a new craft project

## cloning
Create a bare clone of this repo.
```
git clone --bare https://github.com/cremetv/craft-starter.git
```
Mirror-push to the new repo.
```
cd craft-starter.git
git push --mirror https://github.com/username/new-repo.git
```
Remove the temporary local repository you created earlier.
```
cd ..
rm -rf craft-starter.git
```

## installation
Once you cloned this starter template to your project folder you can install all the packages.
```
composer i
npm i
```
