![Theme example](example.png)

#Simple and responsive theme for Ghost platform.

It uses [Phoenix Framework](https://github.com/elenatorro/Phoenix-Framework)

##Download and install

1. Clone the repo

```
git clone https://github.com/elenatorro/Phoenix-Framework-Ghost-Theme.git
```


(Ghost themes should be in the following path: yourblog/content/themes/yourtheme)

Go to: content/themes/phoenixtheme

2. Install the dependencies

```
sudo npm install
```

```
bower install
```

3. Run gulp to compile the assets you want to add

```
gulp
```

##Directory structure

* assets/css/app.css

Compiled style is generated in this file. Don't edit it, it will be overwriten by gulp.

* assets/scss/app.scss

Color config for your theme. You can add there any configuration.
