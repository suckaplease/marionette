Marionette Template for Heroku ready Django project
===================================================

(marionette+requirejs+handlebars+Django) using Vagrant
------------------------------------------------------
1. Install django on your laptop (doesn't require anything fancy like virtualenv, you just need access to django-admin.py)
2. Install [Vagrant][1]
3. Install [VirtualBox][2]
4. Run the following command where you would like your project created, and replace `myproject` with the project's name

    django-admin.py startproject --template https://github.com/suckaplease/marionette/zipball/master myproject --extension=py --name=Vagrantfile

[1]: http://downloads.vagrantup.com/ "Vagrant"
[2]: https://www.virtualbox.org/wiki/Downloads "VirtualBox"
